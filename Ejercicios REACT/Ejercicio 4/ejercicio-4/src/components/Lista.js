import Task from "./Task";
const List = (props) => {
  const { tasks, setTasks } = props;

  console.log(tasks);
  return (
    <ul>
      {tasks.map((taskObject) => {
        const { id, task, done } = taskObject;
        return (
          <li key={id}>
            <Task
              id={id}
              task={task}
              done={done}
              tasks={tasks}
              setTasks={setTasks}
            />
          </li>
        );
      })}
    </ul>
  );
};

/*Esto es lo tercero que se hace*/
export default List;
