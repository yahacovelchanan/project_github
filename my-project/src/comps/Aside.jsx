import React from 'react'
import Timer from './timer'
import Bombs from './Bombs'
import SizeBoard from './sizeBoard'


export default function Aside() {
  return (
    <div className='flex gap-3 items-center justify-center '>
        <Bombs />
        <Timer/>
        <SizeBoard />
    </div>
  )
}
