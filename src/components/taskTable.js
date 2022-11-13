import "./taskTable.css";

export const TaskTable = ({tasks}) => {
    return (
        <table className="table">
        <thead>
          <h3>Tasks</h3>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.name}>
              <td>{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}