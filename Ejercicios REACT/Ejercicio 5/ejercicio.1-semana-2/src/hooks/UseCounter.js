import { useState } from "react";
const initialCount = 0;
const UseCounter = () => {
  const [count, setCount] = useState(0);
  const [increase, setIncrease] = useState(0);
  const [decrease, setDecrease] = useState(0);

  return (
    <>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setIncrease((prevCount) => prevCount + 1)}>
        +
      </button>
      <button onClick={() => setDecrease((prevCount) => prevCount - 1)}>
        -
      </button>
    </>
  );
};

export default UseCounter;
