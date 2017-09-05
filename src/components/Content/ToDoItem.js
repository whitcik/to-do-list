import React from 'react';

const ToDoItem = (props) => {
  return (
    <li className="todo">
      {props.name}
      {!props.done &&
        <button
          onClick={() => props.markAsDone(props.id)}
          className="button done">Done</button>}
      <button 
        onClick={() => props.removeToDo(props.id)}
        className="button remove">Remove</button>                        
    </li>
  );
};

export default ToDoItem;