import { start, gameClock } from 'rook-ecs'
import { InspectInfo } from './InspectInfo'
import { Assets } from 'src/ui/assets'
import { init } from './systems/init'
import { move } from './systems/move'
import { clickToInspect } from './systems/clickToInspect'
import { inspector } from './systems/inspector'
import { render } from './systems/render/render'
import { keyboardInput } from './systems/keyboardInput'
import { keyboardControl } from './systems/keyboardControl'
import { cameraControl } from './systems/cameraControl'
import { spawnEnemies } from './systems/spawnEnemies'

export function startGame (
  canvas: HTMLCanvasElement,
  assets: Assets,
  setInspected: (value: InspectInfo[]) => void,
) {
  return start([
    gameClock(),
    init,
    spawnEnemies,
    keyboardInput(),
    keyboardControl,
    move,
    cameraControl(canvas),
    clickToInspect(canvas),
    inspector(setInspected),
    render(canvas, assets),
  ])
}
