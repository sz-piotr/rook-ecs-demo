import { Position, Velocity, Renderable, Sprite, Collider, Enemy } from '../components'

export function demonLarge (x: number, y: number) {
  return [
    new Position(x, y),
    new Velocity(0, 0),
    new Renderable(10),
    new Sprite('demonLarge', -145 / 2, -239),
    new Collider(-70, -205, 50, -10),
    new Enemy(200, 10),
  ]
}
