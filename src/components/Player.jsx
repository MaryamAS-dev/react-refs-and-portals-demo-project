import { useState } from "react";
export default function Player() {
  const [submitted, setSubmitted] = useState(false);
  const [playerName, setPlayerName] = useState("");
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  function handleClick() {
    setSubmitted(true);
  }
  return (
    <section id="player">
      {/* display a personalized welcome message if 'submitted' is true, otherwise show a default message */}
      <h2>Welcome {submitted ? playerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
