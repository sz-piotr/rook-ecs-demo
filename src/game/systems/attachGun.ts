import { createSystem, PhysicsTick } from 'rook-ecs'
import { Gun, Position, Player } from '../components'
import { Vector2 } from 'src/util/vector'

export const attachGun = createSystem(PhysicsTick, function (world) {
  const player = world.query(Player, Position)[0]
  if (!player) {
    return
  }
  const { x, y } = Vector2.add(player.get(Position), { x: -10, y: -60 })
  for (const entity of world.query(Gun, Position)) {
    if (entity.get(Gun).equipped) {
      const position = entity.get(Position)
      position.x = x
      position.y = y
    }
  }
})
