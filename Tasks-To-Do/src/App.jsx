import React, { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("ALL");
  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos([newTodo, ...todos]);
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "ACTIVE") return !todo.completed;
    if (filter === "COMPLETED") return todo.completed;
    return true; // for 'ALL'
  });

  return (
    <div className="container">
      <Header />
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
      <Footer setFilter={setFilter} currentFilter={filter} />
    </div>
  );
}
/*const App = () => {
  return (
    <>
      <h1>Hello!</h1>
    </>
  );
};*/

export default App;
