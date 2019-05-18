import { World } from 'rook-ecs'
import { Camera, Position } from 'src/game/components'

export function getCameraTransform (world: World<any>) {
  const camera = world.query(Camera, Position)[0]
  if (!camera) {
    return { x: 0, y: 0, zoom: 1 }
  } else {
    const position = camera.get(Position)
    return { x: position.x, y: position.y, zoom: camera.get(Camera).zoom }
  }
}
