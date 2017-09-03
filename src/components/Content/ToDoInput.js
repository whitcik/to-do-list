import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToDo } from 'actions/toDoActions';
import { ENTER_KEY_CODE } from 'constants/keyCodes';

class ToDoInput extends PureComponent {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleEnter = (e) => {
    const { value } = this.state;
    if (e.key === ENTER_KEY_CODE && value.length) {
      this.props.addToDo(value);
      this.setState({
        value: ''
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div className="to-do-input">
        <input
          className="input"
          onChange={this.handleChange}
          onKeyPress={this.handleEnter}
          value={this.state.value}
          type="text"
          name="todo"
          placeholder="What needs to be done?" />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ addToDo }, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ToDoInput);