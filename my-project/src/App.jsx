import React from 'react'
import GameBoard from './game_board'
import Aside from './comps/Aside'
import Heder from './comps/Heder'
import Meseg from './comps/Meseg'
import Reset from './comps/Reset'


export default function App() {
  return (
    <div className='flex-col gap-5 border'>
        <Heder />
        <Aside />
        <Meseg />
        <Reset />
    </div>
  )
}

export default function App() {
  return (
    <div>
      <GameBoard/>
    </div>
  )
}
