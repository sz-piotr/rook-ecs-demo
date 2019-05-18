import { createSystem, RenderTick } from 'rook-ecs'
import { Assets } from 'src/ui/assets'
import { Renderable } from 'src/game/components'
import { renderCollider } from './collider'
import { sortByZIndex } from './sortByZIndex'
import { renderSprite } from './sprite'
import { getCameraTransform } from '../utils/getCameraPosition'
import { renderFloor } from './renderFloor'

export function render (canvas: HTMLCanvasElement, assets: Assets) {
  const ctx = canvas.getContext('2d')!

  return createSystem(RenderTick, function (world) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.save()

    const { x, y, zoom } = getCameraTransform(world)
    ctx.scale(zoom, zoom)
    ctx.translate(-x + canvas.width / 2 / zoom, -y + canvas.height / 2 / zoom)

    renderFloor(ctx, world, assets)

    for (const entity of sortByZIndex(world.query(Renderable))) {
      renderCollider(ctx, entity)
      renderSprite(ctx, entity, assets)
    }

    ctx.restore()
  })
}
