import { useState } from "react";
import "./Counter.css";
import CounterButton from "./CounterButton";

function Counter() {
  const [count, setCount] = useState(0);

  function incrementParent(incBy) {
    setCount(count + incBy);
  }

  function deccrementParent(incBy) {
    setCount(count - incBy);
  }

  return (
    <>
      <span className="count">{count}</span>
      <br />
      <CounterButton
        incBy={1}
        incParent={incrementParent}
        deccrementParent={deccrementParent}
      />
      <CounterButton
        incBy={2}
        incParent={incrementParent}
        deccrementParent={deccrementParent}
      />
      <CounterButton
        incBy={3}
        incParent={incrementParent}
        deccrementParent={deccrementParent}
      />
    </>
  );
}

export default Counter;
