import { createSystem, PhysicsTick } from 'rook-ecs'
import { Player, Position, Collider, Gun } from '../components'
import { areColliding } from './utils/areColliding';

export const pickUpGun = createSystem(PhysicsTick, function (world) {
  const player = world.query(Player, Position, Collider)[0]
  if (!player) {
    return
  }
  for (const entity of world.query(Gun, Position, Collider)) {
    const gun = entity.get(Gun)
    if (!gun.equipped && areColliding(player, entity)) {
      for (const entity of world.query(Gun)) {
        if (entity.get(Gun).equipped) {
          world.remove(entity)
        }
      }
      gun.equipped = true
      break
    }
  }
})
