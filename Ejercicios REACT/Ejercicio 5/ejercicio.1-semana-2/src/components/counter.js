import UseCounter from "../hooks/UseCounter";

const Counter = () => {
  const initialCount = 0;
  const counter = UseCounter(initialCount);
  return <p>{counter}</p>;
};

export default Counter;
