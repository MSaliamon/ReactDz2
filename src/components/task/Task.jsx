import React, { useState } from 'react';
import { tasks as initialTasks } from '../../data/task';

const Task = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const updateStatus = (id, status) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status } : task));
  };

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const renderTasks = (status) => {
    return tasks.filter(task => task.status === status).map(task => (
      <div key={task.id} className="task">
        <span>{task.title}</span>
        {status === 0 && <button onClick={() => updateStatus(task.id, 1)}>In Progress</button>}
        {status === 1 && (
          <>
            <button onClick={() => updateStatus(task.id, 0)}>To Do</button>
            <button onClick={() => updateStatus(task.id, 2)}>Done</button>
          </>
        )}
        {status === 2 && <button onClick={() => removeTask(task.id)}>To Archive</button>}
      </div>
    ));
  };

  return (
    <div className="task-board">
      <div className="column">
        <h2>To Do</h2>
        {renderTasks(0)}
      </div>
      <div className="column">
        <h2>In Progress</h2>
        {renderTasks(1)}
      </div>
      <div className="column">
        <h2>Done</h2>
        {renderTasks(2)}
      </div>
    </div>
  );
};

export default Task;