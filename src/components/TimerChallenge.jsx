import { useState } from "react";
export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  // start a timer that expires after the targetTime in seconds, then set timerExpired to true
  function handleStart() {
    setTimerStarted(true);
    // set a timer using setTimeout function
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {/* display a message when the timer has expired, indicating the user has lost */}
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className=""> Time is running... / Timer inactive</p>
    </section>
  );
}
