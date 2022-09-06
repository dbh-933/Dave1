import { useState } from "react";

const UseCounter = () => {
  let initialCount = 0;
  const [count, setCount] = useState(0);
  const [increase, setIncrease] = useState(+1);
  const [decrease, setDecrease] = useState(-1);

  return (
    <main>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setIncrease((prevCount) => prevCount + 1)}>
        +
      </button>
      <button onClick={() => setDecrease((prevCount) => prevCount - 1)}>
        -
      </button>
    </main>
  );
};

export default UseCounter;
