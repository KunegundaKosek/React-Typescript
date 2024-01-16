import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import styles from "../../../scss/Todo.module.scss";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: Math.random(),
      text,
      completed: false,
    };
    setTodos((prevState) => [...prevState, newTodo]);
  };

  const onToggle = (id: number) => {
    setTodos((prevState: Todo[]) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const onDelete = (id: number) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.todo}>
      <h1>Todo App</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
    </div>
  );
};

export default TodoApp;
