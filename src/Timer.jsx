import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    if (!isRunning || time <= 0) return;
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStart = () => {
    const totalSeconds = Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
    setTime(totalSeconds);
    setRemainingTime(null); 
    setIsRunning(true);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const handleStop = () => {
    setIsRunning(false);
    setRemainingTime(time); 
  };

  const formatTime = () => {
    const hrs = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = time % 60;
    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="inputs">
      <div>
        <input
          type="number"
          placeholder="saat"
          value={hours || ""}
          onChange={(e) => setHours(e.target.value)}
        />
        <input
          type="number"
          placeholder="dəqiqə"
          value={minutes || ""}
          onChange={(e) => setMinutes(e.target.value)}
        />
        <input
          type="number"
          placeholder="saniyə"
          value={seconds || ""}
          onChange={(e) => setSeconds(e.target.value)}
        />
        <button onClick={handleStart}>START</button>
      </div>
      <div>
        {isRunning && (
          <>
            <h1>{formatTime()}</h1>
            <button onClick={handleStop}>STOP</button>
          </>
        )}
        {!isRunning && remainingTime !== null && (
          <h1>{formatTime()}</h1>
        )}
      </div>
    </div>
  );
};

export default Timer;
