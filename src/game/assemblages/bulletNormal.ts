import { Point } from 'src/util/vector'
import { Position, Velocity, Sprite, Collider, Renderable, Bullet } from '../components'

export function bulletNormal ({ x, y }: Point, angle: number) {
  return [
    new Position(x, y),
    new Velocity(Math.cos(angle) * 1000, Math.sin(angle) * 1000),
    new Sprite('bulletNormal', -29 / 2, -29 / 2),
    new Collider(-12, -12, 12, 12),
    new Renderable(20),
    new Bullet(1),
  ]
}
