/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './app.css';
import HabitAddForm from './components/habitAddForm';
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
    this.inputRef = React.createRef();
    this.formRef = React.createRef();
  }

  handleIncrement = habit => {
    const habits = [...this.state.habits].map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
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
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
    // console.log(habits);
    this.setState({ habits });
  };

  handleSubmit = (event, inputRef, formRef) => {
    event.preventDefault();
    const newHabitName = inputRef.current.value;
    const originHabits = [...this.state.habits];
    const existIndex = originHabits
      .map(item => item.name)
      .indexOf(newHabitName);
    if (existIndex === -1) {
      const lastId = originHabits[originHabits.length - 1].id + 1;
      const newHabit = { id: lastId, name: newHabitName, count: 0 };
      originHabits.push(newHabit);
      this.setState({ habits: originHabits });
      // NOTE: 초기화 정석 방법
      formRef.current.reset();
      // NOTE: 초기화 두번 째 방법
      inputRef.current.value = '';
    }
  };
  // getActiveHabitsCount = () => {
  //   const habits = [...this.state.habits];
  //   let totalCount = 0;
  //   habits.forEach(item => {
  //     if (item.count > 0) {
  //       totalCount += 1;
  //     }
  //   });
  //   return totalCount;
  // };

  render() {
    console.log(`[!]Render app`);
    return (
      <>
        <Navbar
          activeHabitsCount={
            this.state.habits.filter(item => item.count > 0).length
          }
        />
        <HabitAddForm
          formRef={this.formRef}
          inputRef={this.inputRef}
          onSubmit={this.handleSubmit}
        />
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
