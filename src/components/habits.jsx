/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { habits, onIncrement, onDecrement, onDelete, onReset } = this.props;
    return (
      <ul>
        {habits.map(habit => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            onReset={onReset}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
