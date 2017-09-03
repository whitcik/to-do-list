import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ToDo extends Component {

  render() {
    return (
      <div className="todo-list">
        <h2 className="title">{this.props.title}</h2>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    toDoList: store.toDoList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);