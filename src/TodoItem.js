import React from 'react';
function TodoItem({ id,description, completed, onToggle }) {
  return (
    <label>
      <input type="checkbox"
      checked={completed}
      onChange={onToggle}
      />
      &nbsp;
      {description}
    </label>
  );
}
export default TodoItem;
