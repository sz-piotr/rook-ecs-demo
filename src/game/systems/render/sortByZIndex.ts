import { Entity } from 'rook-ecs'
import { Renderable } from 'src/game/components'

export const compareZIndex = (a: Entity, b: Entity) =>
  a.get(Renderable).zIndex - b.get(Renderable).zIndex

export const sortByZIndex = (entities: readonly Entity[]) =>
  [...entities].sort(compareZIndex)
