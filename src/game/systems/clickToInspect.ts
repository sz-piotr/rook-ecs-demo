import { World, InitEvent, RenderTick } from 'rook-ecs'
import { Inspectable, Position, Collider, Renderable } from '../components'
import { sortByZIndex } from './render/sortByZIndex'
import { reversed } from 'src/util/reverse';
import { getCameraPosition } from './utils/getCameraPosition'

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
  const cameraPosition = getCameraPosition(world)

  for (const entity of reversed(entities)) {
    const position = entity.get(Position)
    const rectangle = entity.get(Collider)


    const left = position.x - cameraPosition.x + rectangle.left
    const top = position.y - cameraPosition.y + rectangle.top
    const right = position.x - cameraPosition.x + rectangle.right
    const bottom = position.y - cameraPosition.y + rectangle.bottom

    if (x >= left && y >= top && x < right && y < bottom) {
      entity.add(new Inspectable())
      break
    }
  }
}
