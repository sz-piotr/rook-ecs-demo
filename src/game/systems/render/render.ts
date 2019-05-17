import { createSystem, RenderTick, World } from 'rook-ecs'
import { Renderable } from 'src/game/components'
import { renderRectangle } from './rectangle'

export function render (canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')!

  return createSystem(RenderTick, function (world) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (const entity of getRenderable(world)) {
      renderRectangle(ctx, entity)
    }
  })
}

function getRenderable (world: World<any>) {
  return [...world.query(Renderable)].sort((a, b) => {
    return a.get(Renderable).zIndex - b.get(Renderable).zIndex
  })
}
