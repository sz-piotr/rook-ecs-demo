import { Entity } from 'rook-ecs'
import { Position, Collider } from 'src/game/components'

export function renderCollider (ctx: CanvasRenderingContext2D, entity: Entity) {
  if (!entity.has(Position) || !entity.has(Collider)) {
    return
  }

  const position = entity.get(Position)
  const collider = entity.get(Collider)

  ctx.strokeStyle = 'red'
  ctx.strokeRect(
    position.x + collider.left,
    position.y + collider.top,
    collider.right - collider.left,
    collider.bottom - collider.top,
  )
}
