import React from 'react';
import PropTypes from 'prop-types';
import DeleteToDo from './DeleteToDo';
import MarkToDo from './MarkToDo';


const TodoItem = ({ todo, todos, setTodos }) => {
  return (
    <div>
      <p>{todo.title}</p>
      <p>{todo.createdAt.toString()}</p>
      <MarkToDo todo={todo} todos={todos} setTodos={setTodos} />
      <DeleteToDo todo={todo} todos={todos} setTodos={setTodos} />
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired
};

export default TodoItem;
