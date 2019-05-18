import { createSystem, InitEvent } from 'rook-ecs'
import { Position, Velocity, Collider, Renderable, KeyboardController, Sprite } from '../components'

export const init = createSystem(InitEvent, function (world) {
  for (let i = 0; i < 100; i++) {
    if (Math.random() < 0.5) {
      world.add([
        new Position(uniform(300, 600), uniform(300, 600)),
        new Velocity(uniform(-50, 50), uniform(-50, 50)),
        new Collider(103, 129),
        new Sprite('demonBasic'),
        new Renderable(uniform(-50, 50))
      ])
    } else if (Math.random() < 0.8) {
      world.add([
        new Position(uniform(300, 600), uniform(300, 600)),
        new Velocity(uniform(-50, 50), uniform(-50, 50)),
        new Collider(127, 129),
        new Sprite('demonFast'),
        new Renderable(uniform(-50, 50))
      ])
    } else {
      world.add([
        new Position(uniform(300, 600), uniform(300, 600)),
        new Velocity(uniform(-50, 50), uniform(-50, 50)),
        new Collider(145, 239),
        new Sprite('demonLarge'),
        new Renderable(uniform(0, 99))
      ])
    }
  }
  world.add([
    new Position(uniform(300, 600), uniform(300, 600)),
    new Velocity(0, 0),
    new Sprite('player'),
    new Collider(137, 121),
    new Renderable(100),
    new KeyboardController(500)
  ])
})

function uniform (from: number, to: number) {
  return from + Math.random() * (to - from)
}
