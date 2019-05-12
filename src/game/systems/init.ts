import { createSystem, InitEvent } from 'rook-ecs'
import { Position, Velocity, Rectangle, Inspectable } from '../components'

export const init = createSystem(InitEvent, function (world) {
  world.add([
    new Position(0, 0),
    new Velocity(10, 10),
    new Rectangle('red', 100, 100),
  ])

  world.add([
    new Position(700, 0),
    new Velocity(-10, 10),
    new Rectangle('blue', 100, 100),
  ])
})
