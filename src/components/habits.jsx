import React, { memo } from 'react';
import Habit from './habit';

const Habits = memo(props => {
  const { habits, onIncrement, onDecrement, onDelete, onReset } = props;
  return (
    <ul className="habits">
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
});

export default Habits;
