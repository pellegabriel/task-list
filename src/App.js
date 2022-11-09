import { useState } from 'react';
import './App.css';
import TaskCreator from './components/taskCreator';

function App() {

  const [tasksItems, setTasksItems] = useState ([
    {name: 'MyTask 1', done: false},
    {name: 'MyTask 2', done: false},
    {name: 'MyTask 3', done: false},
  ])

  function createNewTask() {
    alert("creating")
  }

  return (
    <div className="App">
      <TaskCreator
        createNewTask={createNewTask}
      />
      <table>
        <thead>

        </thead>
        <tbody>
        {
          tasksItems.map(task =>(
            <div>
              {task.name}
            </div>
          ))
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;