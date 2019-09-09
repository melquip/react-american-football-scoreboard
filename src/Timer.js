import React, { useState, useEffect } from "react";

const Timer = ({ reset, setReset, onEnd }) => {
  const [seconds, setSeconds] = useState(55);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if(seconds + 1 >= 60) {
        setSeconds(seconds - seconds);
        setMinutes(minutes + 1);
      } else {
        setSeconds(seconds + 1);
      }
      if(minutes >= 1 || reset === true) {
        if(!reset) {
          onEnd();
        } else {
          setReset(false);
        }
        setSeconds(0);
        setMinutes(0);
        clearInterval(interval)
        return false;
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className="timer">{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</div>
  );
};

export default Timer;
