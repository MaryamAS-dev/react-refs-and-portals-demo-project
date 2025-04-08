import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
export default function ResultModal({
  ref,
  targetTime,
  remainingTime,
  onReset,
}) {
  const userLost = remainingTime <= 0; // check if the user has run out of time
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  // calculate the score as a percentage based on remaining time and target time
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  // use useImperativeHandle to expose ResultModal's APIs (like open) to parent components via ref
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });
  // create a ref to access the dialog element directly, ensuring it's only used within the ResultModal component
  const dialogRef = useRef();
  // render the modal outside the main DOM hierarchy using createPortal
  return createPortal(
    // reset the timeRemaining state when the dialog is closed via the escape key
    <dialog ref={dialogRef} className="result-modal" onClose={onReset}>
      {/* conditionally display a "You lost!" message if the user has lost */}
      {userLost && <h2>You lost!</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was{" "}
        <strong>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal") // render modal into a specific DOM node (modal-root)
  );
}
