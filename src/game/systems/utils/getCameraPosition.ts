import { World } from 'rook-ecs'
import { Camera, Position } from 'src/game/components'

export function getCameraPosition (world: World<any>) {
  const camera = world.query(Camera, Position)[0]
  if (!camera) {
    return { x: 0, y: 0 }
  } else {
    const position = camera.get(Position)
    return { x: position.x, y: position.y }
  }
}
