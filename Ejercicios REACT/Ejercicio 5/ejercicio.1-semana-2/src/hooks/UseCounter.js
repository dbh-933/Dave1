import { useState } from "react";
UseCounter = () => {
  const [count, setCount] = useState(0);
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
