import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';


const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <TodoItem todo={todo} todos={todos} setTodos={setTodos} />
        </div>
      ))}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired
};

export default TodoList;
