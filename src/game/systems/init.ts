import { createSystem, InitEvent } from 'rook-ecs'
import { Position, Velocity, Rectangle, Renderable, KeyboardController, Sprite } from '../components'

export const init = createSystem(InitEvent, function (world) {
  for (let i = 0; i < 100; i++) {
    if (Math.random() < 0.5) {
      world.add([
        new Position(uniform(300, 600), uniform(300, 600)),
        new Velocity(uniform(-50, 50), uniform(-50, 50)),
        new Rectangle('red', 50, 50),
        new Renderable(10)
      ])
    } else {
      world.add([
        new Position(uniform(300, 600), uniform(300, 600)),
        new Velocity(uniform(-50, 50), uniform(-50, 50)),
        new Rectangle('green', 50, 50),
        new Renderable(20)
      ])
    }
  }
  world.add([
    new Position(uniform(300, 600), uniform(300, 600)),
    new Velocity(0, 0),
    new Sprite('player'),
    new Renderable(30),
    new KeyboardController(500)
  ])
})

function uniform (from: number, to: number) {
  return from + Math.random() * (to - from)
}
