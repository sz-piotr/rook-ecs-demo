import { Entity } from 'rook-ecs'
import { Position, Sprite, Enemy, Velocity } from 'src/game/components'
import { Assets } from 'src/ui/assets'

export function renderSprite (ctx: CanvasRenderingContext2D, entity: Entity, assets: Assets) {
  if (!entity.has(Position) || !entity.has(Sprite)) {
    return
  }

  const position = entity.get(Position)
  const sprite = entity.get(Sprite)

  const image = assets[sprite.asset]

  const shouldInvert = entity.has(Enemy) && entity.has(Velocity) && entity.get(Velocity).x < 0
  if (!shouldInvert) {
    ctx.drawImage(
      image,
      position.x + sprite.offsetX,
      position.y + sprite.offsetY,
    )
  } else {
    ctx.save()
    ctx.translate(
      position.x + sprite.offsetX + image.width / 2,
      position.y + sprite.offsetY + image.height / 2,
    )
    ctx.scale(-1, 1)
    ctx.drawImage(
      image,
      -image.width / 2,
      -image.height / 2,
    )
    ctx.restore()
  }
}
