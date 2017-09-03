import React from 'react';
import './Content.scss';
import ToDoInput from './ToDoInput';
import ToDo from './ToDo';

const Content = () => {
  return (
    <div className="content">
      <div className="container">
        <ToDoInput />
        <ToDo title="To do" />
        <ToDo title="Done" done />
      </div>
    </div>
  );
};

export default Content;