import { useState, useEffect, useRef } from "react";

function ReactiveCounter({ max, step }) {
  //#region State
  const [count, setCount] = useState(0);
  const countRef = useRef();
  //#endregion

  let message = "";
  if (countRef.current < count) {
    message = "Higher";
  }
  if (countRef.current > count) {
    message = "Lower";
  }

  countRef.current = count;

  //#region Methods & Functions
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

  //#region useEffect(s)
  useEffect(() => {
    const id = setInterval(() => {
      console.log(`Count: ${count}`);
    }, 3000);
    return () => {
      clearInterval(id);
    };
  }, [count]);
  //#endregion

  //#region Rendering Components
  return (
    <div className="counter">
      <p>{message}</p>
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
