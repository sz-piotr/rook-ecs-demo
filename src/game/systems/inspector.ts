import { createSystem, RenderTick } from 'rook-ecs'
import { InspectInfo } from '../InspectInfo'
import { Inspectable } from '../components'

export function inspector (setInspected: (value: InspectInfo[]) => void) {
  return createSystem(RenderTick, function (world) {
    const [inspected] = world.query(Inspectable)
    if (!inspected) {
      setInspected([])
      return
    }

    const components: Record<string, any> = (inspected as any).components
    const items: InspectInfo[] = []
    for (const component of Object.values(components)) {
      if (component && typeof component.inspect === 'function') {
        items.push(component.inspect())
      }
    }
    setInspected(items)
  })
}
