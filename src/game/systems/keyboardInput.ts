import { World, InitEvent, RenderTick } from 'rook-ecs'
import { KeyboardInput } from '../components'

export function keyboardInput () {
  const inputs = {
    left: false,
    right: false,
    up: false,
    down: false,
  }

  const onKeyDown = (e: KeyboardEvent) => onKeyChange(e.code, true)
  const onKeyUp = (e: KeyboardEvent) => onKeyChange(e.code, false)

  function onKeyChange (key: string, pressed: boolean) {
    if (key === 'ArrowLeft') {
      inputs.left = pressed
    } else if (key === 'ArrowRight') {
      inputs.right = pressed
    } else if (key === 'ArrowUp') {
      inputs.up = pressed
    } else if (key === 'ArrowDown') {
      inputs.down = pressed
    }
  }

  return function (world: World<unknown>) {
    if (world.event instanceof InitEvent) {
      world.add([new KeyboardInput()])
      window.addEventListener('keydown', onKeyDown)
      window.addEventListener('keyup', onKeyUp)
      return () => {
        window.removeEventListener('keydown', onKeyDown)
        window.removeEventListener('keyup', onKeyUp)
      }
    }

    if (world.event instanceof RenderTick) {
      for (const entity of world.query(KeyboardInput)) {
        const input = entity.get(KeyboardInput)
        input.isLeftPressed = inputs.left
        input.isRightPressed = inputs.right
        input.isUpPressed = inputs.up
        input.isDownPressed = inputs.down
      }
    }
  }
}
