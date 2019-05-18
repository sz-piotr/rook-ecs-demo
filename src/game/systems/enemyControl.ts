import { createSystem, PhysicsTick } from 'rook-ecs'
import { Position, Player, Enemy, Velocity } from '../components'

export const enemyControl = createSystem(PhysicsTick, function (world) {
  const player = world.query(Position, Player)[0]
  if (!player) {
    return
  }
  const playerPosition = player.get(Position)

  for (const entity of world.query(Enemy, Velocity, Position)) {
    const { speed } = entity.get(Enemy)
    const velocity = entity.get(Velocity)
    const position = entity.get(Position)

    const direction = normalize({
      x: playerPosition.x - position.x,
      y: playerPosition.y - position.y,
    })

    velocity.x = direction.x * speed
    velocity.y = direction.y * speed
  }
})

type Point = { x: number, y: number }
function normalize ({ x, y }: Point) {
  const length = Math.sqrt(x * x + y * y)
  return {
    x: x / length,
    y: y / length
  }
}
