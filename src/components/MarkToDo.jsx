import React from 'react';
import PropTypes from 'prop-types';

const MarkToDo = ({ todo, todos, setTodos }) => {
  const handleMarkClick = () => {
    const updatedTodos = todos.map(item => {
      if (item.id === todo.id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    setTodos(updatedTodos);
  }

  return (
    <button onClick={handleMarkClick}>
      {todo.isDone ? 'Mark as Undone' : 'Mark as Done'}
    </button>
  );
}

MarkToDo.propTypes = {
  todo: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired
};

export default MarkToDo;
