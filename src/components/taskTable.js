import { TaskRow } from "./taskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {

  const taskTableRows = (doneValue) => {
    
    return (
      tasks
      .filter(task=> task.done === doneValue)
      .map(task => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ))
    )
  }

  return (
    <table className="table text-white ">
      <thead>
        <tr className="table-primary">
          <th>Tasks</th>
        </tr>
      </thead>
      <div>
      <tbody >
        {
        taskTableRows(showCompleted)
        }
      </tbody>
      </div>
    </table>
  );
};
 