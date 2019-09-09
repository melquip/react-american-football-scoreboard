import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if(seconds + 1 >= 60) {
        setSeconds(seconds - seconds);
        setMinutes(minutes + 1);
      } else {
        setSeconds(seconds + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className="timer">{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</div>
  );
};

export default Timer;
