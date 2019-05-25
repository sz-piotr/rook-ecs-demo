import { Point } from 'src/util/vector'
import { Position, Velocity, Sprite, Collider, Renderable, Bullet, Homing } from '../components'

export function bulletHoming ({ x, y }: Point, angle: number) {
  return [
    new Position(x, y),
    new Velocity(Math.cos(angle) * 500, Math.sin(angle) * 500),
    new Sprite('bulletDuck', -65 / 2, -62 / 2),
    new Collider(-30, -30, 30, 30),
    new Renderable(20),
    new Bullet(2),
    new Homing(),
  ]
}
