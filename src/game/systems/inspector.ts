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
    const items = Object.values(components)
      .map(component => ({
        name: component.constructor.type as string,
        props: Object.keys(component).map(key => ({
          key,
          value: JSON.stringify(component[key])
        }))
      }))
      .sort((a, b) => a.name.localeCompare(b.name))

    setInspected(items)
  })
}
