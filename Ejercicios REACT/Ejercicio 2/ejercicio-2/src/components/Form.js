import { useState } from "react";

const Form = (props) => {
  const { tasks, setTasks } = props;
  const [task, setTask] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const newTask = { id: tasks.length + 1, task: task, done: false };
        setTasks([...tasks, newTask]);
      }}
    >
      <label htmlFor="task">Tarea:</label>
      <input
        id="task"
        type="text"
        value={task}
        onChange={(event) => {
          setTask(event.target.value);
        }}
        maxLength="100"
      />
      <button type="submit">Crear</button>
    </form>
  );
};

export default Form;
