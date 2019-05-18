import { createSystem, InitEvent } from 'rook-ecs'
import { Position, Velocity, Collider, Renderable, Sprite, Camera, Player } from '../components'

export const init = createSystem(InitEvent, function (world) {
  for (let i = 0; i < 100; i++) {
    if (Math.random() < 0.5) {
      world.add([
        new Position(uniform(300, 600), uniform(300, 600)),
        new Velocity(uniform(-50, 50), uniform(-50, 50)),
        new Collider(-50, -50, 45, 50),
        new Sprite('demonBasic'),
        new Renderable(uniform(-50, 50))
      ])
    } else if (Math.random() < 0.8) {
      world.add([
        new Position(uniform(300, 600), uniform(300, 600)),
        new Velocity(uniform(-50, 50), uniform(-50, 50)),
        new Collider(-65, -50, 50, 55),
        new Sprite('demonFast'),
        new Renderable(uniform(-50, 50))
      ])
    } else {
      world.add([
        new Position(uniform(300, 600), uniform(300, 600)),
        new Velocity(uniform(-50, 50), uniform(-50, 50)),
        new Collider(-70, -85, 50, 110),
        new Sprite('demonLarge'),
        new Renderable(uniform(0, 99))
      ])
    }
  }
  world.add([
    new Position(0, 0),
    new Velocity(0, 0),
    new Sprite('player'),
    new Collider(-35, -60, 35, 60),
    new Renderable(100),
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
