import { createSystem, RenderTick } from 'rook-ecs'
import { Assets } from 'src/ui/assets'
import { Renderable } from 'src/game/components'
import { renderRectangle } from './rectangle'
import { sortByZIndex } from './sortByZIndex'
import { renderSprite } from './sprite'

export function render (canvas: HTMLCanvasElement, assets: Assets) {
  const ctx = canvas.getContext('2d')!

  return createSystem(RenderTick, function (world) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (const entity of sortByZIndex(world.query(Renderable))) {
      renderRectangle(ctx, entity)
      renderSprite(ctx, entity, assets)
    }
  })
}
