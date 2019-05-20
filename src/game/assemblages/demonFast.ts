import { Position, Velocity, Renderable, Sprite, Collider, Enemy } from '../components'

export function demonFast (x: number, y: number) {
  return [
    new Position(x, y),
    new Velocity(0, 0),
    new Renderable(10),
    new Sprite('demonFast', -127 / 2, -129),
    new Collider(-65, -125, 50, -10),
    new Enemy(400, 5),
  ]
}
