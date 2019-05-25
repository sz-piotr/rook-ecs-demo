import { createSystem, PhysicsTick } from 'rook-ecs'
import { Enemy, Position, Collider, Bullet } from '../components'
import { areColliding } from './utils/areColliding'
import { gunAk47, gunFun } from '../assemblages'

export const hurtEnemies = createSystem(PhysicsTick, function (world) {
  for (const bullet of world.query(Bullet, Position, Collider)) {
    for (const enemyEntity of world.query(Enemy, Position, Collider)) {
      if (areColliding(bullet, enemyEntity)) {
        world.remove(bullet)

        const enemy = enemyEntity.get(Enemy)
        enemy.hitpoints -= bullet.get(Bullet).damage
        if (enemy.hitpoints <= 0) {

          const roll = Math.random()
          if (roll < 0.3) {
            world.add(gunAk47(enemyEntity.get(Position)))
          } else if (roll < 0.5) {
            world.add(gunFun(enemyEntity.get(Position)))
          }

          world.remove(enemyEntity)
        }

        break
      }
    }
  }
})
