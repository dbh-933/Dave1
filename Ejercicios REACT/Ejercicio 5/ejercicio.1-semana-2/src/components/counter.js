import UseCounter from "../hooks/UseCounter";

const Counter = () => {
  const counter = UseCounter();
  return <>{counter}</>;
};

export default Counter;
