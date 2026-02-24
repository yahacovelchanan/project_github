import React from 'react'

export default function SizeBoard() {
  return (
    <div className="border border-amber-300 w-50">
        <div className="text-xl flex gap-2 text-white  w-50 h-15 justify-center items-center bg-blue-900">
            <img src="\public\menu.png" className="w-5 h-5  " />
            <p>Board Size</p>
        </div>
    <div className="text-3xl flex text-white  w-50 h-15 justify-center items-center bg-blue-950">
      <p>10 × 8</p>
    </div>
    </div>
  )
}
