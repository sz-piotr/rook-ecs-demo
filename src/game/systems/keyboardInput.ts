import { World, InitEvent, RenderTick } from 'rook-ecs'
import { KeyboardInput } from '../components'

export function keyboardInput () {
  const inputs: Record<string, boolean | undefined> = {}

  const onKeyDown = (e: KeyboardEvent) => onKeyChange(e.code, true)
  const onKeyUp = (e: KeyboardEvent) => onKeyChange(e.code, false)

  function onKeyChange (key: string, pressed: boolean) {
    inputs[key as keyof typeof inputs] = pressed
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
        input.isLeftPressed = !!(inputs.ArrowLeft || inputs.KeyA)
        input.isRightPressed = !!(inputs.ArrowRight || inputs.KeyD)
        input.isUpPressed = !!(inputs.ArrowUp || inputs.KeyW)
        input.isDownPressed = !!(inputs.ArrowDown || inputs.KeyS)
      }
    }
  }
}
