import React, { useState, useEffect } from "react";

const Timer = ({ reset, setReset, quarter, onEnd }) => {
  const [seconds, setSeconds] = useState(50);
  const [minutes, setMinutes] = useState(14);

  useEffect(() => {
    let interval = setInterval(() => {
      if(seconds + 1 >= 60) {
        setSeconds(seconds - seconds);
        setMinutes(minutes + 1);
      } else {
        setSeconds(seconds + 1);
      }
      if(minutes >= 15 || reset === true) {
        if(!reset) {
          onEnd();
        } else if(reset && quarter < 4) {
          setReset(false);
        }
        setSeconds(0);
        setMinutes(0);
        clearInterval(interval)
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className="timer">{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</div>
  );
};

export default Timer;
