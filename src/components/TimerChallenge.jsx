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
  // timer has expired without being stopped by the user (lost condition)
  if (timeRemaining <= 0) {
    clearInterval(timerRef.current); // stop the interval when the timer expires
    setTimeRemaining(targetTime * 1000); // reset the remaining time state
    dialogRef.current.open(); // open the ResultModal by calling the open() method exposed via useImperativeHandle
  }
  function handleStart() {
    // replace 'setTimeout' with 'setInterval' to repeatedly measure the remaining time while the timer is running
    timerRef.current = setInterval(() => {
      // decrease the remaining time by 10 milliseconds on each interval, updating the state accordingly
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }
  // stop the timer manually by the user (win condition)
  function handleStop() {
    clearInterval(timerRef.current); // stop the interval when the timer is manually stopped
    dialogRef.current.open(); // open the ResultModal by calling the open() method exposed via useImperativeHandle
  }
  return (
    <>
      <ResultModal
        ref={dialogRef}
        targetTime={targetTime}
        remainingTime={timeRemaining}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          {/* execute handleStop if the timer is active, otherwise execute handleStart */}
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : ""}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
