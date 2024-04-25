import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';


const AddTodo = ({ todos, setTodos }) => {
  const [todoInput, setTodoInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInput.trim() === '') {
      setErrorMessage('input cannot be empty');
      return;
    }

    const newTodo = {
      id: nanoid(),
      createdAt: new Date(),
      title: todoInput,
      isDone: false
    };

    setTodos([...todos, newTodo]);
    setTodoInput('');
    setErrorMessage('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todoInput} onChange={handleInputChange} />
      <button type="submit">Add</button>
      <span style={{ color: 'red' }}>{errorMessage}</span>
    </form>
  );
}

AddTodo.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired
};

export default AddTodo;
