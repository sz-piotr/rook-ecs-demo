import { createSystem, RenderTick, World } from 'rook-ecs'
import { Position, Rectangle, Renderable } from '../components'

export function render (canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')!

  return createSystem(RenderTick, function (world) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (const entity of getRenderable(world)) {
      if (entity.has(Position) && entity.has(Rectangle)) {

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
    }
  })
}

function getRenderable (world: World<any>) {
  return [...world.query(Renderable)].sort((a, b) => {
    return a.get(Renderable).zIndex - b.get(Renderable).zIndex
  })
}
