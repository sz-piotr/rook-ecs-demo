import { system, RenderTick, createCachedSelector, selectAll } from 'rook-ecs'
import { Position, Rectangle } from '../components'

const selector = createCachedSelector(selectAll(
  Position,
  Rectangle,
))

export function render (canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')!
  return system(RenderTick, function (world) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (const entity of world.query(selector)) {
      const position = entity.get(Position)
      const rectangle = entity.get(Rectangle)

      ctx.fillStyle = rectangle.color
      ctx.fillRect(
        position.x,
        position.y,
        rectangle.width,
        rectangle.height,
      )
    }
  })
}
