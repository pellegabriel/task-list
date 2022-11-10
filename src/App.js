import { useState } from "react";
import "./App.css";
import TaskCreator from "./components/taskCreator";

function App() {
  const [tasksItems, setTasksItems] = useState([
    { name: "MyTask 1", done: false },
    { name: "MyTask 2", done: false },
    { name: "MyTask 3", done: false },
  ]);

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  }

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <table className="table">
        <thead>
          <h3>Tasks</h3>
        </thead>
        <tbody>
          {tasksItems.map((task) => (
            <tr key={task.name}>
              <td>{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
