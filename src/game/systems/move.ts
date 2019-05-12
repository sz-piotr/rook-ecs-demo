import { createSystem, PhisicsTick } from 'rook-ecs'
import { Position, Velocity } from '../components'

export const move = createSystem(PhisicsTick, function (world) {
  for (const entity of world.query(Position, Velocity)) {
    const position = entity.get(Position)
    const velocity = entity.get(Velocity)
    position.x += velocity.x * world.event.deltaTime
    position.y += velocity.y * world.event.deltaTime
  }
})
