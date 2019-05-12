import { World, InitEvent, RenderTick } from 'rook-ecs'
import { Inspectable, Position, Rectangle } from '../components'

interface Point {
  x: number,
  y: number
}

export function clickToInspect (canvas: HTMLCanvasElement) {
  let clickedAt: Point | null = null

  function onMouseClick (e: MouseEvent) {
    const { left, top } = canvas.getBoundingClientRect()
    clickedAt = {
      x: e.clientX - left,
      y: e.clientY - top,
    }
  }

  return function (world: World<unknown>) {
    if (world.event instanceof InitEvent) {
      canvas.addEventListener('click', onMouseClick)
      return () => canvas.removeEventListener('click', onMouseClick)
    }

    if (world.event instanceof RenderTick && clickedAt) {
      inspectClicked(world, clickedAt)
      clickedAt = null
    }
  }
}

function inspectClicked (world: World<any>, { x, y }: Point) {
  for (const entity of world.query(Inspectable)) {
    entity.remove(Inspectable)
  }

  for (const entity of world.query(Position, Rectangle)) {
    const position = entity.get(Position)
    const rectangle = entity.get(Rectangle)

    if (
      x >= position.x &&
      y >= position.y &&
      x < position.x + rectangle.width &&
      y < position.y + rectangle.height
    ) {
      entity.add(new Inspectable())
      break
    }
  }
}
