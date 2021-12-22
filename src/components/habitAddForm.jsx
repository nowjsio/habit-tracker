/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { inputRef, onSubmit, formRef } = this.props;
    return (
      <form
        ref={formRef}
        className="habit-form"
        onSubmit={event => onSubmit(event, inputRef, formRef)}
      >
        <input
          ref={inputRef}
          type="text"
          className="add-input"
          placeholder="input habit"
        />
        <button type="submit" className="add-button">
          SUBMIT
        </button>
      </form>
    );
  }
}

export default HabitAddForm;
