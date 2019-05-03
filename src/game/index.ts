import { start, system, InitEvent } from 'rook-ecs'

export function startGame (canvas: HTMLCanvasElement) {
  return start([
    system(InitEvent, function () {
      console.log('INIT')
    })
  ])
}
