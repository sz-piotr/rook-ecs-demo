import { system, InitEvent } from 'rook-ecs'
import { Position, Velocity, Rectangle } from '../components'

export const init = system(InitEvent, function (world) {
  world.add([
    new Position(0, 0),
    new Velocity(40, 40),
    new Rectangle('red', 100, 100),
  ])

  world.add([
    new Position(700, 0),
    new Velocity(-40, 40),
    new Rectangle('blue', 100, 100),
  ])
})
