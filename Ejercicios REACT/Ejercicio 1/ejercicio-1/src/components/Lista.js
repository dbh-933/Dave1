const List = (props) => {
  const { tasks } = props;
  console.log(tasks);
  return (
    <ul>
      {tasks.map((taskObject) => {
        const { id, task, done } = taskObject;
        return (
          <li key={id}>
            <p className={done ? "line-through" : ""}>{task}</p>
          </li>
        );
      })}
    </ul>
  );
};

/*Esto es lo tercero que se hace*/
export default List;
