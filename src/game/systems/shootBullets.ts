import { createSystem, PhysicsTick } from 'rook-ecs'
import { Position, ShootsBullets } from '../components'
import { bulletNormal } from '../assemblages'
import { Vector2 } from 'src/util/vector'

export const shootBullets = createSystem(PhysicsTick, function (world) {
  for (const entity of world.query(Position, ShootsBullets)) {
    const position = entity.get(Position)
    const shootsBullets = entity.get(ShootsBullets)

    shootsBullets.timeleft -= world.event.deltaTime
    if (shootsBullets.timeleft < 0) {
      shootsBullets.timeleft += shootsBullets.interval

      const bulletPosition = Vector2.add(
        position,
        Vector2.fromPolar(shootsBullets.offset, shootsBullets.angle)
      )

      world.add(bulletNormal(bulletPosition, shootsBullets.angle))
    }
  }
})
