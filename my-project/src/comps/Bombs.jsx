import React, { useEffect, useState } from 'react'

export default function Bombs(prop) {
  console.log(prop.count)
    const [countBomb, setCountBomb] = useState(prop.count)
  console.log(countBomb)
  return (
    <div className="border border-amber-300 w-50">
        <div className="text-xl flex text-white  w-50 h-15 justify-center items-center bg-blue-900">
            <img src="\public\bomb.png" className="w-10 h-10 " />
            <p>Bombs Remaining</p>
        </div>
    <div className="text-3xl flex text-white  w-50 h-15 justify-center items-center bg-blue-950">
      <p>{prop.count}</p>
    </div>
    </div>
  )
}
