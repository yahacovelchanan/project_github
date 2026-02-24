import React, { useEffect, useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(null);
  const [clock, setClock] = useState("");
  useEffect(() => {
    if (!timer) {
      setTimer(new Date(1000 * 60 * 3));
    } else {
      setClock(
        `${timer.getMinutes().toString().padStart(2, "0")}:${timer
          .getSeconds()
          .toString()
          .padStart(2, "0")}`
      );
      if (timer.getMinutes() === 0 && timer.getSeconds() === 0) {
        return;
      }
      setTimeout(() => {
        setTimer(new Date(timer.getTime() - 1000));
      }, 1000);
    }
  }, [timer]);
  return (
    <div className="border border-amber-300 w-50">
        <div className="text-xl flex text-white  w-50 h-15 justify-center items-center bg-blue-900">
            <img src="\public\circular-alarm-clock-tool.png" className="w-10 h-10 " />
            <p>Time Remaining</p>
        </div>
    <div className="text-3xl flex text-white  w-50 h-15 justify-center items-center bg-blue-950">
      <p>{clock}</p>
    </div>
    </div>
  );
}
