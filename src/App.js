import { useState, useEffect } from "react";
import "./App.css";
import {TaskCreator} from "./components/taskCreator";
import {TaskTable} from "./components/taskTable";

function App() {
  const [tasksItems, setTasksItems] = useState([]);

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  }

  useEffect(()=>{
    let data = localStorage.getItem('tasks')
    if(data) {
      setTasksItems(JSON.parse(data))
    }
  }, [])

  useEffect(()=>{
    localStorage.setItems('tasks', JSON.stringify(tasksItems))
  },[tasksItems])

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={tasksItems}/>
    </div>
  );
}

export default App;
