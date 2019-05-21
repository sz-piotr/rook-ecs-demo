import { Renderable, Collider, Sprite, Gun, Position, ShootsBullets } from '../components'

export function gunBasic () {
  return [
    new Position(0, 0),
    new Sprite('gunBasic', -30, -15),
    new Collider(-30, -15, 85, 51),
    new Renderable(15),
    new ShootsBullets('normal', 60, 0.5, 0),
    new Gun(Infinity, true)
  ]
}
