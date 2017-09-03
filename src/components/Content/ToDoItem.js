import React from 'react';

const ToDoItem = (props) => {
  return (
    <li className="todo">
      {props.name}
      {!props.done && <button className="done">Done</button>}
      <button className="delete">Remove</button>                        
    </li>
  );
};

export default ToDoItem;