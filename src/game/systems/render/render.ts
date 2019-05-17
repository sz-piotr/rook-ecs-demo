import { createSystem, RenderTick } from 'rook-ecs'
import { Renderable } from 'src/game/components'
import { renderRectangle } from './rectangle'
import { sortByZIndex } from './sortByZIndex'

export function render (canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')!

  return createSystem(RenderTick, function (world) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (const entity of sortByZIndex(world.query(Renderable))) {
      renderRectangle(ctx, entity)
    }
  })
}
