import { createSystem, InitEvent } from 'rook-ecs'
import { Position, Velocity, Collider, Renderable, Sprite, Camera, Player } from '../components'

export const init = createSystem(InitEvent, function (world) {
  for (let i = 0; i < 100; i++) {
    if (Math.random() < 0.5) {
      world.add([
        new Position(uniform(300, 600), uniform(300, 600)),
        new Velocity(uniform(-50, 50), uniform(-50, 50)),
        Sprite.forDemonBasic(),
        Collider.forDemonBasic(),
        new Renderable(10)
      ])
    } else if (Math.random() < 0.8) {
      world.add([
        new Position(uniform(300, 600), uniform(300, 600)),
        new Velocity(uniform(-50, 50), uniform(-50, 50)),
        Sprite.forDemonFast(),
        Collider.forDemonFast(),
        new Renderable(10)
      ])
    } else {
      world.add([
        new Position(uniform(300, 600), uniform(300, 600)),
        new Velocity(uniform(-50, 50), uniform(-50, 50)),
        Sprite.forDemonLarge(),
        Collider.forDemonLarge(),
        new Renderable(10)
      ])
    }
  }
  world.add([
    new Position(0, 0),
    new Velocity(0, 0),
    Sprite.forPlayer(),
    Collider.forPlayer(),
    new Renderable(10),
    new Player(500),
  ])
  world.add([
    new Position(0, 0),
    new Camera(),
  ])
})

function uniform (from: number, to: number) {
  return from + Math.random() * (to - from)
}
