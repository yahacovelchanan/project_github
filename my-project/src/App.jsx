import React from 'react'
import GameBoard from './game_board'
import Aside from './comps/Aside'
import Heder from './comps/Heder'
import Meseg from './comps/Meseg'


export default function App() {
  return (
    <div className='flex-col gap-5 border'>
        <Heder />
        <Aside />
        <Meseg />
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
