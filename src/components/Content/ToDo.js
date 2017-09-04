import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { markAsDone, removeToDo, setToDoList } from 'actions/toDoActions';
import localStorageHelper from 'utils/localStorageHelper';
import ToDoItem from './ToDoItem';

class ToDo extends Component {

  componentDidMount() {
    const localStorageToDoList = localStorageHelper.getToDoList();

    if(localStorageToDoList){
      this.props.setToDoList(localStorageToDoList);
    }
  }

  getCorrectItems() {
    const { done, toDoList } = this.props;

    return toDoList.filter(todo => todo.done === done);
  }

  generateItems() {

    return this.getCorrectItems().map(todo => {
      return <ToDoItem
                key={todo.id}
                {...todo}
                markAsDone={this.props.markAsDone}
                removeToDo={this.props.removeToDo} />
    });
  }

  render() {
    return (
      <div className="todo-list">
        <h2 className="title">{this.props.title}</h2>
        <ul className="list">
          {this.generateItems()}
        </ul>
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
    ...bindActionCreators({ markAsDone, removeToDo, setToDoList }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);