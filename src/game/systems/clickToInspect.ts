import { World, InitEvent, RenderTick } from 'rook-ecs'
import { Inspectable, Position, Rectangle, Renderable } from '../components'
import { sortByZIndex } from './render/sortByZIndex'
import { reversed } from 'src/util/reverse';

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

  const entities = sortByZIndex(world.query(Renderable, Position, Rectangle))
  for (const entity of reversed(entities)) {
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
