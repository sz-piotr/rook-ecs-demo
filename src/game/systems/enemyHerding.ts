import { createSystem, PhysicsTick } from 'rook-ecs'
import { Enemy, Position, Velocity } from '../components'
import { Vector2 } from 'src/util/vector'

export const enemyHerding = createSystem(PhysicsTick, function (world) {
  const enemies = world.query(Enemy, Position, Velocity)

  for (let i = 0; i < enemies.length; i++) {
    for (let j = i + 1; j < enemies.length; j++) {
      const a = enemies[i]
      const b = enemies[j]

      const aPos = a.get(Position)
      const bPos = b.get(Position)
      const diff = Vector2.sub(aPos, bPos)
      const distance = Vector2.length(diff)
      const direction = Vector2.normalize(diff)

      const force = 250 / Math.sqrt(distance)

      const aVel = a.get(Velocity)
      const bVel = b.get(Velocity)

      aVel.x += direction.x * force
      bVel.x -= direction.x * force

      aVel.y += direction.y * force
      bVel.y -= direction.y * force
    }
  }
})
