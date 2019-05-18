import { createSystem, PhysicsTick } from 'rook-ecs'
import { Enemy, Position, Player, Velocity, Sprite, Collider, Renderable, EnemySpawner } from '../components'
import { uniform } from 'src/util/uniform';

export const spawnEnemies = createSystem(PhysicsTick, function (world) {
  for (const entity of world.query(EnemySpawner)) {
    const spawner = entity.get(EnemySpawner)
    spawner.timeLeft -= world.event.deltaTime

    if (spawner.timeLeft < 0) {
      spawner.difficulty += 1
      spawner.timeLeft += uniform(0.5, 5 - Math.min(spawner.difficulty / 10, 4))

      const player = world.query(Player, Position)[0]
      if (player) {
        const playerPosition = player.get(Position)

        const angle = uniform(0, Math.PI * 2)
        const distance = uniform(2000, 2500)

        const position = new Position(
          playerPosition.x + Math.cos(angle) * distance,
          playerPosition.y + Math.sin(angle) * distance,
        )

        world.add([
          position,
          new Velocity(0, 0),
          new Renderable(10),
          Sprite.forDemonLarge(),
          Collider.forDemonLarge(),
          Enemy.forDemonLarge(),
        ])
      }
    }
  }
})
