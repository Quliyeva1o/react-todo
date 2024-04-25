import React from 'react';
import PropTypes from 'prop-types';

const DeleteToDo = ({ todo, todos, setTodos }) => {
  const handleDeleteClick = () => {
    
    const updatedTodos = todos.filter(item => item.id !== todo.id);
    setTodos(updatedTodos);
  }

  return (
    <button onKeyUp={ "" ? setTodos(todos) :handleDeleteClick}>Delete</button>
  );
}

DeleteToDo.propTypes = {
  todo: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired
};

export default DeleteToDo;
