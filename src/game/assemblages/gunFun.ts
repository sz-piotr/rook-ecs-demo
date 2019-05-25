import { Renderable, Collider, Sprite, Gun, Position, ShootsBullets } from '../components'
import { Point } from 'src/util/vector'

export function gunFun ({ x, y }: Point) {
  return [
    new Position(x, y),
    new Sprite('gunFun', -40, -20),
    new Collider(-40, -20, 89, 76),
    new Renderable(15),
    new ShootsBullets('homing', 65, 0.5, 0),
    new Gun(5, false)
  ]
}
