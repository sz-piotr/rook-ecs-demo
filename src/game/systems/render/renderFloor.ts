import { World } from 'rook-ecs'
import { getCameraTransform } from '../utils/getCameraPosition'
import { Assets } from 'src/ui/assets'

const TILE_SIZE = 200
export function renderFloor(ctx: CanvasRenderingContext2D, world: World<any>, assets: Assets) {
  const { x, y, zoom } = getCameraTransform(world)
  const width = ctx.canvas.width / zoom
  const height = ctx.canvas.height / zoom

  const startX = Math.floor((x - width / 2) / TILE_SIZE) * TILE_SIZE
  const startY = Math.floor((y - height / 2) / TILE_SIZE) * TILE_SIZE

  for (let i = startX; i < x + width / 2; i += TILE_SIZE) {
    for (let j = startY; j < y + height / 2; j += TILE_SIZE) {
      ctx.drawImage(assets.floorTile0, i, j)
    }
  }
}
