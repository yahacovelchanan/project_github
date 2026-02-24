import React, { useState } from 'react'
import GameBoard from './game_board'
import Aside from './comps/Aside'
import Heder from './comps/Heder'
import Meseg from './comps/Meseg'
import Reset from './comps/Reset'


export default function App() {
    const [countBomb, setCountBomb] = useState(0)
  return (
    <div className='flex-col justify-center items-center gap-2 border bg-blue-950'>
        <Heder />
        <Aside count={countBomb}/>
        <Meseg />
        <GameBoard setcount={setCountBomb} count={countBomb}/>
        <Reset />
    </div>
  )
}


