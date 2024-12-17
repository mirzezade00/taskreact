import React, {useEffect} from "react";
import { useStopwatch } from "./ContentStopwatch";
import "./Stopwatch.css";

const Stopwatch = () => {
  const { seconds, setSeconds, run, setRun } = useStopwatch();

  useEffect(() => {
    if (!run) return;
    const interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, [run, setSeconds]);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="watch">
      <h2>
        {hours} saat {minutes} dəqiqə {remainingSeconds} saniyə
      </h2>
      <div className="buttons">
        <button onClick={() => setRun(true)}>Start</button>
        <button onClick={() => setRun(false)}>Pause</button>
        <button
          onClick={() => {
            setRun(false);
            setSeconds(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;