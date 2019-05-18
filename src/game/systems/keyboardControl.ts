import { createSystem, PhysicsTick, World } from 'rook-ecs'
import { Velocity, KeyboardInput, Player } from '../components'

const SQRT_2 = Math.sqrt(2)

export const keyboardControl = createSystem(PhysicsTick, withInput((world, input) => {
  for (const entity of world.query(Player, Velocity)) {
    const { speed } = entity.get(Player)
    const velocity = entity.get(Velocity)

    velocity.x = (+input.isRightPressed - +input.isLeftPressed) * speed
    velocity.y = (+input.isDownPressed - +input.isUpPressed) * speed

    if (velocity.x !== 0 && velocity.y !== 0) {
      velocity.x /= SQRT_2
      velocity.y /= SQRT_2
    }
  }
}))

function withInput (system: (world: World<PhysicsTick>, input: KeyboardInput) => void) {
  return function (world: World<PhysicsTick>) {
    const inputEntity = world.query(KeyboardInput)[0]
    if (inputEntity) {
      return system(world, inputEntity.get(KeyboardInput))
    }
  }
}
