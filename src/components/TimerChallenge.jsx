import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";
export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  // create a reference for accessing the built-in dialog element inside the ResultModal component
  const dialogRef = useRef();
  // create a reference to store the timer ID, which persists across re-renders
  // and doesn't reset when the component re-renders
  const timerRef = useRef();
  // start a timer that expires after the targetTime in seconds, then set timerExpired to true
  function handleStart() {
    // set a timer using setTimeout function
    timerRef.current = setTimeout(() => {
      setTimerExpired(true);
      dialogRef.current.open(); // call the open() method exposed by useImperativeHandle to display the ResultModal
    }, targetTime * 1000);

    setTimerStarted(true);
  }
  // stop the timer
  function handleStop() {
    clearTimeout(timerRef.current);
  }
  return (
    <>
      <ResultModal ref={dialogRef} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          {/* execute handleStop if timerStarted is true, otherwise execute handleStart */}
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : ""}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
