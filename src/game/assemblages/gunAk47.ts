import { Renderable, Collider, Sprite, Gun, Position, ShootsBullets } from '../components'
import { Point } from 'src/util/vector'

export function gunAk47 ({ x, y }: Point) {
  return [
    new Position(x, y),
    new Sprite('gunAk47', -73, -20),
    new Collider(-73, -20, 217, 61),
    new Renderable(15),
    new ShootsBullets('normal', 180, 0.15, 0),
    new Gun(5, false)
  ]
}
