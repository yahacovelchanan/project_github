import React from 'react'

export default function Heder() {
  return (
    <div className='flex gap-3 items-center justify-around bg-blue-900'>
        <img src="\public\vpn.png" className='w-10 h-10'/>
        <h1 className="text-3xl  text-white ">Bomb Detection Application</h1>
        <p className="text-lg font-bold text-green-600 ">Simulation Active</p>
    </div>
  )
}
