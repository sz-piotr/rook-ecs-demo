import { start, gameClock } from 'rook-ecs'
import { init } from './systems/init'
import { move } from './systems/move'
import { render } from './systems/render'

export function startGame (canvas: HTMLCanvasElement) {
  return start([
    gameClock(),
    init,
    move,
    render(canvas)
  ])
}
