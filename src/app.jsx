import React, { memo, useCallback, useRef, useState } from 'react';
import './app.css';
import HabitAddForm from './components/habitAddForm';
import Habits from './components/habits';
import Navbar from './components/navbar';
import ResetAll from './components/resetAll';

const App = memo(() => {
  const [_habits, setHabits] = useState([
    { id: 0, name: 'Coding', count: 0 },
    { id: 1, name: 'Soccer', count: 0 },
    { id: 2, name: 'Movie', count: 0 },
  ]);
  const inputRef = useRef();
  const formRef = useRef();

  const handleIncrement = useCallback(habit => {
    setHabits(habits =>
      habits.map(item => {
        if (item.id === habit.id) {
          return { ...habit, count: habit.count + 1 };
        }
        return item;
      }),
    );
  }, []);

  const handleDecrement = useCallback(habit => {
    setHabits(habits =>
      habits.map(item => {
        if (item.id === habit.id) {
          const count = habit.count - 1;
          return { ...habit, count: count < 0 ? 0 : count };
        }
        return item;
      }),
    );
  }, []);

  const handleDelte = useCallback(habit => {
    setHabits(habits => habits.filter(item => item !== habit));
  }, []);

  const handleReset = useCallback(habit => {
    setHabits(habits =>
      habits.map(item => {
        if (item.id === habit.id) {
          return { ...habit, count: 0 };
        }
        return item;
      }),
    );
  }, []);

  const handleResetAll = useCallback(() => {
    setHabits(habits =>
      habits.map(item => {
        if (item.count !== 0) {
          return { ...item, count: 0 };
        }
        return item;
      }),
    );
  }, []);

  const handleSubmit = useCallback((event, _inputRef, _formRef) => {
    event.preventDefault();
    setHabits(habits => {
      if (!habits.some(item => item.name === _inputRef.current.value)) {
        return [
          ...habits,
          { id: new Date().getTime(), name: _inputRef.current.value, count: 0 },
        ];
      }
      return habits;
    });
    _formRef.current.reset();
  }, []);

  return (
    <>
      <Navbar
        activeHabitsCount={_habits.filter(item => item.count > 0).length}
      />
      <HabitAddForm
        formRef={formRef}
        inputRef={inputRef}
        onSubmit={handleSubmit}
      />
      <Habits
        habits={_habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelte}
        onReset={handleReset}
      />
      <ResetAll onResetAll={handleResetAll} />
    </>
  );
});
export default App;
