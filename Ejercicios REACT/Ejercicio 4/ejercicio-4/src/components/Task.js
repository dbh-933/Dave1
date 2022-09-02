const Task = (props) => {
  const { id, done, task, tasks, setTasks } = props;
  return (
    <>
      <p className={done ? "line-through" : ""}>{task}</p>
      <label htmlFor="done">Done:</label>
      <input
        id="done"
        type="checkbox"
        checked={done}
        onChange={(event) => {
          const tasksUpdated = tasks.map((taskObject) => {
            if (taskObject.id === id) {
              taskObject.done = event.target.checked;
            }
            return taskObject;
          });
          setTasks(tasksUpdated);
        }}
      />
    </>
  );
};

export default Task;
