import { createSystem, PhysicsTick, World } from 'rook-ecs'
import { MouseInput, ShootsBullets, Gun, Sprite } from '../components'

export const mouseControl = createSystem(PhysicsTick, withInput((world, input) => {
  for (const entity of world.query(ShootsBullets)) {
    const shootsBullets = entity.get(ShootsBullets)
    shootsBullets.angle = input.angle
  }
  for (const entity of world.query(Gun, Sprite)) {
    if (entity.get(Gun).equipped) {
      const sprite = entity.get(Sprite)
      sprite.rotation = input.angle
    }
  }
}))

function withInput (system: (world: World<PhysicsTick>, input: MouseInput) => void) {
  return function (world: World<PhysicsTick>) {
    const inputEntity = world.query(MouseInput)[0]
    if (inputEntity) {
      return system(world, inputEntity.get(MouseInput))
    }
  }
}
