import React from 'react';
import './Content.scss';
import ToDoInput from './ToDoInput';

const Content = () => {
  return (
    <div className="content">
      <div className="container">
        <ToDoInput />
      </div>
    </div>
  );
};

export default Content;