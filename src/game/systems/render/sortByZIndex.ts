import { Entity } from 'rook-ecs'
import { Renderable, Position } from 'src/game/components'

export const compareZIndex = (a: Entity, b: Entity) => {
  const result = a.get(Renderable).zIndex - b.get(Renderable).zIndex
  if (result !== 0) {
    return result
  } else {
    if (a.has(Position) && b.has(Position)) {
      return a.get(Position).y - b.get(Position).y
    } else {
      return 0
    }
  }
}

export const sortByZIndex = (entities: readonly Entity[]) =>
  [...entities].sort(compareZIndex)
