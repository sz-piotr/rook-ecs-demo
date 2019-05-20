import { World, InitEvent, RenderTick } from 'rook-ecs'
import { MouseInput } from '../components'
import { Vector2 } from 'src/util/vector'

export function mouseInput (canvas: HTMLCanvasElement) {
  let angle = 0

  function onMouseMove (e: MouseEvent) {
    const { left, top, width, height } = canvas.getBoundingClientRect()
    const center = {
      x: left + width / 2,
      y: top + height / 2,
    }
    angle = Vector2.angle(Vector2.sub({ x: e.clientX, y: e.clientY }, center))
  }

  return function (world: World<unknown>) {
    if (world.event instanceof InitEvent) {
      world.add([new MouseInput()])
      window.addEventListener('mousemove', onMouseMove)
      return () => window.removeEventListener('mousemove', onMouseMove)
    }

    if (world.event instanceof RenderTick) {
      for (const entity of world.query(MouseInput)) {
        const mouseInput = entity.get(MouseInput)
        mouseInput.angle = angle
      }
    }
  }
}
