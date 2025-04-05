import { useImperativeHandle, useRef } from "react";
export default function ResultModal({ ref, result, targetTime }) {
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
  return (
    <dialog ref={dialogRef} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was
        <strong>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
