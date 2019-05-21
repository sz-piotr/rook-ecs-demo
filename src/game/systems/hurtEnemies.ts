import { createSystem, PhysicsTick, Entity } from 'rook-ecs'
import { Enemy, Position, Collider, Bullet } from '../components'

export const hurtEnemies = createSystem(PhysicsTick, function (world) {
  for (const bullet of world.query(Bullet, Position, Collider)) {
    for (const enemyEntity of world.query(Enemy, Position, Collider)) {
      if (areColliding(bullet, enemyEntity)) {
        world.remove(bullet)
        const enemy = enemyEntity.get(Enemy)
        enemy.hitpoints -= bullet.get(Bullet).damage
        if (enemy.hitpoints <= 0) {
          world.remove(enemyEntity)
        }
        break
      }
    }
  }
})

function areColliding (a: Entity, b: Entity) {
  const aPosition = a.get(Position)
  const aCollider = a.get(Collider)
  const ax1 = aPosition.x + aCollider.left
  const ay1 = aPosition.y + aCollider.top
  const ax2 = aPosition.x + aCollider.right
  const ay2 = aPosition.y + aCollider.bottom

  const bPosition = b.get(Position)
  const bCollider = b.get(Collider)
  const bx1 = bPosition.x + bCollider.left
  const by1 = bPosition.y + bCollider.top
  const bx2 = bPosition.x + bCollider.right
  const by2 = bPosition.y + bCollider.bottom

  return !(ax2 < bx1 || bx2 < ax1 || ay2 < by1 || by2 < ay1)
}
