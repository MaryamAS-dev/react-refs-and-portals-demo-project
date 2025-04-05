export default function ResultModal({ result, targetTime }) {
  return (
    // add the 'open' attribute to the dialog element to make it visible by default
    <dialog className="result-modal" open>
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
