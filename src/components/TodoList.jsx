// src/components/TodoList.jsx
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, deleteTask, moveTaskUp, moveTaskDown }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
          moveTaskUp={moveTaskUp}
          moveTaskDown={moveTaskDown}
        />
      ))}
    </ul>
  );
};

export default TodoList;
