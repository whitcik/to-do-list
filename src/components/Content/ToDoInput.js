import React, { PureComponent } from 'react';
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
      console.log('Action', this.state.value);
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

export default ToDoInput;
