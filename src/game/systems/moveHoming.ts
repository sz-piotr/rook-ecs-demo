import { createSystem, PhysicsTick, Entity } from 'rook-ecs'
import { Homing, Position, Velocity, Enemy } from '../components'
import { Vector2 } from 'src/util/vector'

export const moveHoming = createSystem(PhysicsTick, function (world) {
  for (const entity of world.query(Homing, Position, Velocity)) {
    const closestEnemy = findClosest(
      entity.get(Position),
      world.query(Enemy, Position),
    )
    if (closestEnemy) {
      const direction = Vector2.normalize(
        Vector2.sub(closestEnemy.get(Position), entity.get(Position))
      )

      const velocity = entity.get(Velocity)
      const facing = Vector2.normalize(velocity)

      const crossProductZ = (direction.x * facing.y - direction.y * facing.x)
      const newVelocity = Vector2.rotate(
        velocity,
        -crossProductZ * 5 * world.event.deltaTime
      )

      velocity.x = newVelocity.x
      velocity.y = newVelocity.y
    }
  }
})

function findClosest (position: Position, entities: readonly Entity[]) {
  let lastDistance = Infinity
  let lastEntity: Entity | undefined = undefined
  for (const entity of entities) {
    const distance = Vector2.length(Vector2.sub(position, entity.get(Position)))
    if (distance < lastDistance) {
      lastEntity = entity
      lastDistance = distance
    }
  }
  return lastEntity
}
