import { useState, useEffect } from "react";

const UseCounter = (initialCount = 0) => {
  const [counter, setCounter] = useState(initialCount);

  useEffect(() => {
    document.title = `El contador tiene un valor de ${counter}`;
  }, [counter]);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return { counter, increase, decrease };

  /*<main>
      <h1>Contador: {counter}</h1>
      <input type="" />
      <button>
        <input onChange={() => setCounter("hola")}></input> kek
      </button>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <button onClick={() => setCounter(initialCount)}>Reset</button>
    </main>*/
};

export default UseCounter;
