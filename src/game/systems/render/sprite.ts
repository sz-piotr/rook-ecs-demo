import { Entity } from 'rook-ecs'
import { Position, Sprite } from 'src/game/components'
import { Assets } from 'src/ui/assets'

export function renderSprite (ctx: CanvasRenderingContext2D, entity: Entity, assets: Assets) {
  if (!entity.has(Position) || !entity.has(Sprite)) {
    return
  }

  const position = entity.get(Position)
  const sprite = entity.get(Sprite)

  const image = assets[sprite.asset]

  ctx.drawImage(
    image,
    position.x + sprite.offsetX,
    position.y + sprite.offsetY,
  )
}
