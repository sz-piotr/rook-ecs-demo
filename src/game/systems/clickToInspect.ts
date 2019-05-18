import { World, InitEvent, RenderTick } from 'rook-ecs'
import { Inspectable, Position, Collider, Renderable } from '../components'
import { sortByZIndex } from './render/sortByZIndex'
import { reversed } from 'src/util/reverse';
import { getCameraTransform } from './utils/getCameraPosition'

interface Point {
  x: number,
  y: number
}

export function clickToInspect (canvas: HTMLCanvasElement) {
  let clickedAt: Point | null = null

  function onMouseClick (e: MouseEvent) {
    const { left, top } = canvas.getBoundingClientRect()
    clickedAt = {
      x: e.clientX - left - canvas.width / 2,
      y: e.clientY - top - canvas.height / 2,
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

  const entities = sortByZIndex(world.query(Renderable, Position, Collider))
  const transform = getCameraTransform(world)

  for (const entity of reversed(entities)) {
    const position = entity.get(Position)
    const rectangle = entity.get(Collider)


    const left = (position.x - transform.x + rectangle.left) * transform.zoom
    const top = (position.y - transform.y + rectangle.top) * transform.zoom
    const right = (position.x - transform.x + rectangle.right) * transform.zoom
    const bottom = (position.y - transform.y + rectangle.bottom) * transform.zoom

    if (x >= left && y >= top && x < right && y < bottom) {
      entity.add(new Inspectable())
      break
    }
  }
}
