import { createSystem, PhysicsTick } from 'rook-ecs'
import { Position, ShootsBullets } from '../components'
import { bulletNormal } from '../assemblages'

export const shootBullets = createSystem(PhysicsTick, function (world) {
  for (const entity of world.query(Position, ShootsBullets)) {
    const position = entity.get(Position)
    const shootsBullets = entity.get(ShootsBullets)

    shootsBullets.timeleft -= world.event.deltaTime
    if (shootsBullets.timeleft < 0) {
      shootsBullets.timeleft += shootsBullets.interval

      world.add(bulletNormal(position, shootsBullets.angle))
    }
  }
})
