import React from 'react';
import PropTypes from 'prop-types';


const SearchTodo = ({todo, todos, setTodos }) => {
  const handleSearch = (event) => {
    const searchText = event.target.value.toLowerCase();
    const updatedTodos = todos.filter((todoItem) => {
      return todoItem.title.toLowerCase().includes(searchText);
    });
    
    setTodos(updatedTodos);
  }

  return (
    <input type="text" placeholder="Search" onKeyUp={handleSearch} />
  );
}

export default SearchTodo;
