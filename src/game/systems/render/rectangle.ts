import { Entity } from 'rook-ecs'
import { Position, Rectangle } from 'src/game/components'

export function renderRectangle (ctx: CanvasRenderingContext2D, entity: Entity) {
  if (!entity.has(Position) || !entity.has(Rectangle)) {
    return
  }

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
