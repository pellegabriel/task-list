import { useState } from "react";

export const TaskCreator = (props) => {
    console.log(props) 
    const [newTaskName, setNewTaskName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.createNewTask(newTaskName)
        localStorage.setItem("tasks", newTaskName)
        setNewTaskName("")
}

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder='New Task...'
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            />
            <button>Save Task</button>
        </form>
    )
}

export default TaskCreator