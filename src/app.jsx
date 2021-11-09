/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
import ResetAll from './components/resetAll';

class App extends Component {
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
    const habits = [...this.state.habits].map(item => {
      if (item === habit) {
        item.count += 1;
        return item;
      }
      return item;
    });

    this.setState({ habits });
  };

  handleDecrement = habit => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelte = habit => {
    const habits = [...this.state.habits].filter(item => item !== habit);
    this.setState({ habits });
  };

  handleReset = habit => {
    const habits = [...this.state.habits].map(item => {
      if (item === habit) {
        item.count = 0;
        return item;
      }
      return item;
    });

    this.setState({ habits });
  };

  handleResetAll = () => {
    const habits = [...this.state.habits].map(item => {
      item.count = 0;
      return item;
    });
    console.log(habits);
    this.setState({ habits });
  };

  getActiveHabitsCount = () => {
    const habits = [...this.state.habits];
    let totalCount = 0;
    habits.forEach(item => {
      if (item.count > 0) {
        totalCount += 1;
      }
    });
    return totalCount;
  };

  render() {
    return (
      <>
        <Navbar activeHabitsCount={this.getActiveHabitsCount()} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelte}
          onReset={this.handleReset}
        />
        <ResetAll onResetAll={this.handleResetAll} />
      </>
    );
  }
}

export default App;
