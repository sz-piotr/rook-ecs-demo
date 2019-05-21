import { createSystem, InitEvent } from 'rook-ecs'
import { EnemySpawner, Position, Camera } from '../components'
import { player, gunAk47 } from '../assemblages'

export const init = createSystem(InitEvent, function (world) {
  world.add(player())
  world.add(gunAk47())
  world.add([
    new Position(0, 0),
    new Camera(),
  ])
  world.add([
    new EnemySpawner()
  ])
})
