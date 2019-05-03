import React, { useEffect, useRef } from 'react'
import { startGame } from '../game'

export function GameView () {
  const canvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    return startGame(canvas.current!)
  }, [])

  return <canvas className="game-view" ref={canvas} />
}
