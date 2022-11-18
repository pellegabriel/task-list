interface ITaskRow {
  tasks: { name: string };
  toggleTask: () => string;
}

export const TaskRow = ({ task, toggleTask }: ITaskRow) => {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        {task.name}
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  );
};
