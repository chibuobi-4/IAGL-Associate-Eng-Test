import React from "react";
import TodoList from "./component/TodoList";
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>TO-DO List</h1>
      <TodoList />
    </div>
  );
}
