import { system, RenderTick, createCachedSelector, selectAll } from 'rook-ecs'
import { InspectInfo } from '../InspectInfo'
import { Inspectable } from '../components'

const selector = createCachedSelector(selectAll(Inspectable))

export function inspector (setInspected: (value: InspectInfo[]) => void) {
  return system(RenderTick, function (world) {
    const [inspected] = world.query(selector)
    if (!inspected) {
      setInspected([])
      return
    }

    const components: Map<any, any> = (inspected as any).components
    const items: InspectInfo[] = []
    for (const component of components.values()) {
      if (component && typeof component.inspect === 'function') {
        items.push(component.inspect())
      }
    }
    setInspected(items)
  })
}
