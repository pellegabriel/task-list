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
            <tr key={task.name}>
              <td>
                {task.name}
                <input type="checkbox"
                    checked={task.done}
                    onChange={()=> alert('cambio')}
                />
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
    )
}