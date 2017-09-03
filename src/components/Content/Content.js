import React from 'react';
import './Content.scss';
import ToDoInput from './ToDoInput';
import ToDo from './ToDo';

const Content = () => {
  return (
    <div className="content">
      <div className="container">
        <ToDoInput />
        <ToDo title="To do" done={false} />
        <ToDo title="Done" done={true} />
      </div>
    </div>
  );
};

export default Content;