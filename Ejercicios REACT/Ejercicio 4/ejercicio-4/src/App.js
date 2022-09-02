import "./App.css";
import { useState } from "react";
import List from "./components/Lista";
import Taskdb from "./db/Taskdb";
import Form from "./components/Form";

function App() {
  const [tasks, setTasks] = useState(Taskdb);

  console.log(tasks);

  return (
    <div className="App">
      <h1>task exercise</h1>
      <Form tasks={tasks} setTasks={setTasks} />
      <List tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

/*Primero se hace todo el App salvo el List y el taskdb, que es lo ultimo que se hace*/

export default App;
