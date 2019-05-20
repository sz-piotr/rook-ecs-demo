import { createSystem, PhysicsTick } from 'rook-ecs'
import { Position, Player } from '../components'

const MAX_DISTANCE_2 = 6000 * 6000

export const killDistantEntities = createSystem(PhysicsTick, function (world) {
  const player = world.query(Player, Position)[0]
  if (!player) {
    return
  }

  const playerPosition = player.get(Position)
  for (const entity of world.query(Position)) {
    const position = entity.get(Position)
    const distance2 =
      pow2(playerPosition.x - position.x) +
      pow2(playerPosition.y - position.y)
    if (distance2 > MAX_DISTANCE_2) {
      world.remove(entity)
    }
  }
})

const pow2 = (x: number) => x * x
