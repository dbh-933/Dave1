import "./App.css";
import UseCounter from "./hooks/UseCounter";

function App() {
  const { counter, increase, decrease } = UseCounter();

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={increase}>Incrementar</button>
      <button onClick={decrease}>Disminuir</button>
    </div>
  );
}

export default App;
