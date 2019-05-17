import { createSystem, PhysicsTick, World } from 'rook-ecs'
import { Velocity, KeyboardInput, KeyboardController } from '../components'

const SQRT_2 = Math.sqrt(2)

export const keyboardControl = createSystem(PhysicsTick, withInput((world, input) => {
  for (const entity of world.query(KeyboardController, Velocity)) {
    const controller = entity.get(KeyboardController)
    const velocity = entity.get(Velocity)

    velocity.x = (+input.isRightPressed - +input.isLeftPressed) * controller.speed
    velocity.y = (+input.isDownPressed - +input.isUpPressed) * controller.speed

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
