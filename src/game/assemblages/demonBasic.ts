import { Position, Velocity, Renderable, Sprite, Collider, Enemy } from '../components'

export function demonBasic (x: number, y: number) {
  return [
    new Position(x, y),
    new Velocity(0, 0),
    new Renderable(10),
    new Sprite('demonBasic', -103 / 2, -129),
    new Collider(-50, -125, 45, -10),
    new Enemy(300, 3),
  ]
}
