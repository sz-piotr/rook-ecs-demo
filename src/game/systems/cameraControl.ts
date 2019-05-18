import { createSystem, PhysicsTick } from 'rook-ecs'
import { Position, Camera, Player } from '../components'

export const cameraControl = createSystem(PhysicsTick, function (world) {
  const camera = world.query(Position, Camera)[0]
  const player = world.query(Position, Player)[0]
  if (camera && player) {
    const cameraPosition = camera.get(Position)
    const playerPosition = player.get(Position)

    cameraPosition.x = playerPosition.x
    cameraPosition.y = playerPosition.y
  }
})
