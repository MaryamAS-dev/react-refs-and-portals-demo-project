import { useState, useRef } from "react";
export default function Player() {
  const inputRef = useRef();
  const [playerName, setPlayerName] = useState(null);
  function handleClick() {
    setPlayerName(inputRef.current.value);
    // clear the input field by resetting its value to an empty string after setting the playerName
    inputRef.current.value = "";
  }
  return (
    <section id="player">
      {/* display a personalized welcome message if 'playerName' is not null or undefined, otherwise show a default message using the nullish coalescing operator (??) */}
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
