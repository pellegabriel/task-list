import { TaskRow } from "./taskRow"

export const TaskTable = ({tasks}) => {
    return (
        <table className="table">
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskRow task={task} key={task.name}/>
          ))
          }
        </tbody>
      </table>
    )
}