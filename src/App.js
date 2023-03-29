import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleAddTask(event) {
    event.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  }

  function handleRemoveTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  function handleToggleComplete(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  function clearList() {
    setTasks([]);
  }
  
  return (
    <div className="container">
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          placeholder="Add a task..."
          onChange={(event) => setNewTask(event.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
      <ul id="taskList">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <button className="completeBtn" onClick={() => handleToggleComplete(index)}>
              {/* {task.completed ? '✔' : '✔'} */}
              ✔
            </button>
            {task.text}
            <button className="removeBtn" onClick={() => handleRemoveTask(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
      <button className='clearBtn' onClick={clearList}>Clear List</button>
    </div>
  );
}

export default App;
