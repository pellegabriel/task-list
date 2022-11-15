import { TaskRow } from "./taskRow";

export const TaskTable = ({ tasks, toggleTask }) => {
  const taskTableRows = () => {
    return tasks.map((task) => (
      <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{taskTableRows()}</tbody>
    </table>
  );
};
