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

        const [fastTreshold, largeTreshold] = getChances(spawner.difficulty)

        const roll = Math.random()
        if (roll < fastTreshold) {
          world.add([
            position,
            new Velocity(0, 0),
            new Renderable(10),
            Sprite.forDemonBasic(),
            Collider.forDemonBasic(),
            Enemy.forDemonBasic(),
          ])
        } else if (roll < largeTreshold) {
          world.add([
            position,
            new Velocity(0, 0),
            new Renderable(10),
            Sprite.forDemonFast(),
            Collider.forDemonFast(),
            Enemy.forDemonFast(),
          ])
        } else {
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
  }
})

function getChances (difficulty: number) {
  if (difficulty < 3) {
    return [0.9, 1]
  } else if (difficulty < 10) {
    return [0.8, 0.95]
  } else if (difficulty < 20) {
    return [0.5, 0.7]
  } else {
    return [0.2, 0.6]
  }
}
