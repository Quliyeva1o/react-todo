import React, { useState } from 'react';
import AddTodo from './AddToDo.jsx';
import SearchTodo from './SearchToDo.jsx';
import TodoList from './TodoList.jsx';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo todos={todos} setTodos={setTodos} />
      <SearchTodo todos={todos} setTodos={setTodos} /> 
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Todo;
