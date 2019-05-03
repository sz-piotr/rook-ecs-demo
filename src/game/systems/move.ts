import { system, PhisicsTick, createCachedSelector, selectAll } from 'rook-ecs'
import { Position, Velocity } from '../components'

const selector = createCachedSelector(selectAll(
  Position,
  Velocity,
))

export const move = system(PhisicsTick, function (world) {
  for (const entity of world.query(selector)) {
    const position = entity.get(Position)
    const velocity = entity.get(Velocity)
    position.x += velocity.x * world.event.deltaTime
    position.y += velocity.y * world.event.deltaTime
  }
})
