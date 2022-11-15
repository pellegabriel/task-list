interface ITaskRow {
  tasks: { name: string };
  toggleTask: () => string;
}

export const TaskRow = ({ task, toggleTask }: ITaskRow) => {
  return (
    <tr>
      <td>
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
