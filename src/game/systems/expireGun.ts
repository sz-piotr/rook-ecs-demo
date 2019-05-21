import { createSystem, PhysicsTick } from 'rook-ecs'
import { Gun } from '../components'
import { gunBasic } from '../assemblages'

export const expireGun = createSystem(PhysicsTick, function (world) {
  for (const entity of world.query(Gun)) {
    const gun = entity.get(Gun)
    if (gun.equipped) {
      gun.timeLeft -= world.event.deltaTime
    }
    if (gun.timeLeft <= 0) {
      world.remove(entity)
      world.add(gunBasic())
    }
  }
})
