// src/components/TodoApp.jsx
import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

const TodoApp = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      const [removed] = updatedTasks.splice(index, 1);
      updatedTasks.splice(index - 1, 0, removed);
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      const [removed] = updatedTasks.splice(index, 1);
      updatedTasks.splice(index + 1, 0, removed);
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <TodoInput addTask={addTask} />
      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        moveTaskUp={moveTaskUp}
        moveTaskDown={moveTaskDown}
      />
    </div>
  );
};

export default TodoApp;
