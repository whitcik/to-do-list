import React, { Component } from 'react';
import Header from 'components/Header/Header.js'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="To Do List" />
      </div>
    );
  }
}

export default App;
