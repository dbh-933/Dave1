import UseCounter from "../hooks/UseCounter";

function Counter() {
  const counter = UseCounter();
  return <>{counter}</>;
}

export default Counter;
