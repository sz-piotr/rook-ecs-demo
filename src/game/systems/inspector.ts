import { system, RenderTick } from 'rook-ecs'
import { InspectInfo } from '../InspectInfo'

export function inspector (setInspected: (value: InspectInfo[]) => void) {
  let i = 0
  return system(RenderTick, function () {
    setInspected([
      {
        name: 'Position',
        props: [
          { key: 'x', value: `${i++}` },
          { key: 'y', value: `${i * 2}` },
        ]
      },
      {
        name: 'Rectangle',
        props: [
          { key: 'width', value: '100' },
          { key: 'height', value: '200' },
          { key: 'color', value: 'red' },
        ]
      },
    ])
  })
}
