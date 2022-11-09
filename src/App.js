import './App.css';
import { useState } from 'react';

function App() {

  const [newTaskName, setNewTaskName] = useState()

  return (
    <div className="App">
      <input
        type="text"
        placeholder='New Task...'
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button onClick={() => alert (newTaskName)}>Save Task</button>
    </div>
  );
}

export default App;