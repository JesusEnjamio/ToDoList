// src/components/TodoItem.jsx
import React from "react";

const TodoItem = ({ task, index, deleteTask, moveTaskUp, moveTaskDown }) => {
  return (
    <li className="task-item">
      <span>{task}</span>
      <button onClick={() => moveTaskUp(index)}>↑</button>
      <button onClick={() => moveTaskDown(index)}>↓</button>
      <button onClick={() => deleteTask(index)}>Eliminar</button>
    </li>
  );
};

export default TodoItem;
