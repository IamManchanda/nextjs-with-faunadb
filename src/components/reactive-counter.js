import { useState } from "react";

function ReactiveCounter({ max, step }) {
  //#region State
  const [count, setCount] = useState(0);
  //#endregion

  //#region Methods
  function handleIncrement() {
    setCount(count + 1);
    return;
  }

  function handleDecrement() {
    setCount(count - 1);
    return;
  }

  function handleReset() {
    setCount(0);
    return;
  }
  //#endregion

  //#region Rendering Components
  return (
    <div className="counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </section>
    </div>
  );
  //#endregion
}

export default ReactiveCounter;
