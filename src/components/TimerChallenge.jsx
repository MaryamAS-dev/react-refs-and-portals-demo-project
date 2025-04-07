import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";
export default function TimerChallenge({ title, targetTime }) {
  // replace 'timerStarted' & 'timerExpired' states with 'timeRemaining' to simplify tracking of the remaining time
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  // create a reference to access the ResultModal component's methods exposed via useImperativeHandle
  const dialogRef = useRef();
  // create a reference to store the timer ID, which persists across re-renders
  // and doesn't reset when the component re-renders
  const timerRef = useRef();
  // check if the timer is active (remaining time is greater than 0 and less than the target time)
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  function handleStart() {
    // replace 'setTimeout' with 'setInterval' to repeatedly measure the remaining time while the timer is running
    timerRef.current = setInterval(() => {
      // decrease the remaining time by 10 milliseconds on each interval, updating the state accordingly
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }
  // clear the interval to stop the timer
  function handleStop() {
    clearInterval(timerRef.current);
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
