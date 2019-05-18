import { createSystem, InitEvent } from 'rook-ecs'
import {
  EnemySpawner,
  Position,
  Velocity,
  Collider,
  Renderable,
  Sprite,
  Camera,
  Player
} from '../components'

export const init = createSystem(InitEvent, function (world) {
  world.add([
    new Position(0, 0),
    new Velocity(0, 0),
    Sprite.forPlayer(),
    Collider.forPlayer(),
    new Renderable(10),
    new Player(500),
  ])
  world.add([
    new Position(0, 0),
    new Camera(),
  ])
  world.add([
    new EnemySpawner()
  ])
})
