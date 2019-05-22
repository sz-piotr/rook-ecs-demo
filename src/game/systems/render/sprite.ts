import { Entity } from 'rook-ecs'
import { Position, Sprite, Enemy, Velocity } from 'src/game/components'
import { Assets } from 'src/ui/assets'
import { Vector2 } from 'src/util/vector'

export function renderSprite (ctx: CanvasRenderingContext2D, entity: Entity, assets: Assets) {
  if (!entity.has(Position) || !entity.has(Sprite)) {
    return
  }

  const position = entity.get(Position)
  const sprite = entity.get(Sprite)

  const image = assets[sprite.asset]

  const offset = {
    x: sprite.offsetX + image.width / 2,
    y: sprite.offsetY + image.height / 2
  }

  ctx.save()
  ctx.translate(
    position.x + offset.x,
    position.y + offset.y,
  )

  if (shouldInvert(entity)) {
    ctx.scale(-1, 1)
  }
  if (sprite.rotation !== 0) {
    ctx.translate(-offset.x, -offset.y)
    ctx.rotate(sprite.rotation)
    ctx.translate(offset.x, offset.y)
  }

  ctx.drawImage(
    image,
    -image.width / 2,
    -image.height / 2,
  )

  ctx.restore()
}

const shouldInvert = (entity: Entity) =>
  entity.has(Enemy) && entity.has(Velocity) && entity.get(Velocity).x < 0
