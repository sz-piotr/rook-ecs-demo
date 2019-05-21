import { Renderable, Collider, Sprite, Gun, Position, ShootsBullets } from '../components'

export function gunAk47 () {
  return [
    new Position(0, 0),
    new Sprite('gunAk47', -73, -20),
    new Collider(-73, -20, 217, 61),
    new Renderable(15),
    new ShootsBullets('normal', 180, 0.15, 0),
    new Gun(Infinity, true)
  ]
}
