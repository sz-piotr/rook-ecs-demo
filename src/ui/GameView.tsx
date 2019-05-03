import React, { useEffect, useRef } from 'react'
import { startGame } from '../game'

export function GameView () {
  const canvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    function onResize () {
      canvas.current!.width = window.innerWidth
      canvas.current!.height = window.innerHeight
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    return startGame(canvas.current!)
  }, [])

  return <canvas className="game-view" ref={canvas} />
}
