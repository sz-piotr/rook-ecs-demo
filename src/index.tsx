import './styles/main.less'

import React from 'react'
import { render } from 'react-dom'

import { GameView } from './ui/GameView'

render(
  <GameView />,
  document.getElementById('app'),
)
