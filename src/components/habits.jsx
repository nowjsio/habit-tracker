/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habits: [
        { id: 0, name: 'Coding', count: 0 },
        { id: 1, name: 'Soccer', count: 0 },
        { id: 2, name: 'Movie', count: 0 },
      ],
    };
  }

  handleIncrement = habit => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const habits = [...this.state.habits].map(item => {
      if (item === habit) {
        // eslint-disable-next-line no-param-reassign
        item.count += 1;
        return item;
      }
      return item;
    });

    this.setState({ habits });
  };

  handleDecrement = habit => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelte = habit => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const habits = [...this.state.habits].filter(item => item !== habit);
    this.setState({ habits });
  };

  handleReset = habit => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const habits = [...this.state.habits].map(item => {
      if (item === habit) {
        // eslint-disable-next-line no-param-reassign
        item.count = 0;
        return item;
      }
      return item;
    });

    this.setState({ habits });
  };

  render() {
    const { habits } = this.state;
    return (
      <ul>
        {habits.map(habit => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelte}
            onReset={this.handleReset}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
