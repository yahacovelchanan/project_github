import React from 'react'
import Aside from './comps/Aside'
import Heder from './comps/Heder'


export default function App() {
  return (
    <div className='flex-col gap-5 border'>
        <Heder />
        <Aside />
    </div>
  )
}


