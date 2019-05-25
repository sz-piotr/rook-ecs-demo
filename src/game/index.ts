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
import { killDistantEntities } from './systems/killDistantEntities'
import { enemyControl } from './systems/enemyControl'
import { enemyHerding } from './systems/enemyHerding'
import { shootBullets } from './systems/shootBullets'
import { mouseInput } from './systems/mouseInput'
import { mouseControl } from './systems/mouseControl'
import { hurtEnemies } from './systems/hurtEnemies'
import { attachGun } from './systems/attachGun'
import { expireGun } from './systems/expireGun'
import { pickUpGun } from './systems/pickUpGun'
import { moveHoming } from './systems/moveHoming'

export function startGame (
  canvas: HTMLCanvasElement,
  assets: Assets,
  setInspected: (value: InspectInfo[]) => void,
) {
  return start([
    gameClock(),
    init,
    spawnEnemies,
    killDistantEntities,
    keyboardInput(),
    keyboardControl,
    mouseInput(canvas),
    mouseControl,
    shootBullets,
    enemyControl,
    enemyHerding,
    move,
    moveHoming,
    pickUpGun,
    attachGun,
    expireGun,
    hurtEnemies,
    cameraControl(canvas),
    clickToInspect(canvas),
    inspector(setInspected),
    render(canvas, assets),
  ])
}
