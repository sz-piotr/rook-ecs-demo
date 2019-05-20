import { Renderable, Collider, Sprite, Velocity, Position, Player } from '../components'

export function player () {
  return [
    new Position(0, 0),
    new Velocity(0, 0),
    new Sprite('player', -137 / 2, -121),
    new Collider(-35, -121, 35, 0),
    new Renderable(10),
    new Player(500),
  ]
}
