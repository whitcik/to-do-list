import React from 'react';
import './Header.scss';

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default Header;