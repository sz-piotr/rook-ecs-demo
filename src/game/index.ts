import { start, gameClock } from 'rook-ecs'
import { InspectInfo } from './InspectInfo'
import { init } from './systems/init'
import { move } from './systems/move'
import { render } from './systems/render'
import { inspector } from './systems/inspector'

export function startGame (
  canvas: HTMLCanvasElement,
  setInspected: (value: InspectInfo[]) => void,
) {
  return start([
    gameClock(),
    init,
    move,
    inspector(setInspected),
    render(canvas),
  ])
}
