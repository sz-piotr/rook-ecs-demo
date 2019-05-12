import React, { useEffect, useRef, useState } from 'react'
import { InspectInfo } from 'src/game/InspectInfo'
import { startGame } from '../game'
import { Inspector } from './Inspector'

export function GameView () {
  const canvas = useRef<HTMLCanvasElement>(null)
  const [inspected, setInspected] = useState<InspectInfo[]>([])

  useEffect(() => {
    const onResize = () => setTimeout(() => {
      const rect = canvas.current!.getBoundingClientRect()
      canvas.current!.width = rect.width
      canvas.current!.height = rect.height
    })
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    return startGame(canvas.current!, setInspected)
  }, [])

  return (
    <div className="game-view">
      <Inspector value={inspected} />
      <canvas className="canvas" ref={canvas} />
    </div>
  )
}
