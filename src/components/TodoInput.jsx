import React, { useState } from "react";

const TodoInput = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      addTask(newTask);
      setNewTask(""); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Agrega una nueva tarea"
      />
      <button type="submit">Agregar tarea</button>
    </form>
  );
};

export default TodoInput;
