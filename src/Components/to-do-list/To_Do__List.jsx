import React, { useRef, useState } from "react";
import "./style.css";

const To_Do__List = () => {
  const task = useRef();

  const [tsk, settsk] = useState([]);

  // Add Task
  const addTask = (e) => {
    e.preventDefault();

    const value = task.current.value.trim();

    if (value === "") return;

    settsk([...tsk, value]);

    task.current.value = "";
  };

  // Delete Task
  const deleteTask = (index) => {
    settsk(tsk.filter((_, i) => i !== index));
  };

  // Edit Task
  const editTask = (index) => {
    const updatedTask = prompt("Edit Task", tsk[index]);

    if (updatedTask !== null && updatedTask.trim() !== "") {
      const updatedTasks = [...tsk];
      updatedTasks[index] = updatedTask.trim();
      settsk(updatedTasks);
    }
  };

  return (
    <div className="todo">
      <h1>Todo List</h1>

      <div className="container">
        <form onSubmit={addTask}>
          <input
            ref={task}
            type="text"
            placeholder="Enter Task"
          />

          <button type="submit">
            Add Task
          </button>
        </form>
      </div>

      <ul>
        {tsk.map((t, index) => (
          <div className="task" key={index}>
            <li>{t}</li>

            <button onClick={() => editTask(index)}>
              Edit
            </button>

            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default To_Do__List;