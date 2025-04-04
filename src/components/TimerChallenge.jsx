import { useState } from "react";
export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  // start a timer that expires after the targetTime in seconds, then set timerExpired to true
  function handleStart() {
    // set a timer using setTimeout function
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>Start Challenge</button>
      </p>
      <p className=""> Time is running... / Timer inactive</p>
    </section>
  );
}
