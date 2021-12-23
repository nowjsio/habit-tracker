import React, { memo } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';

const Habit = memo(props => {
  const { onIncrement, onDecrement, onDelete, habit, onReset } = props;
  const { name, count } = habit;

  return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>

      <button
        className="habit-button habit-increase"
        type="button"
        onClick={() => onIncrement(habit)}
      >
        <i className="fas fa-plus-square" />
      </button>
      <button
        className="habit-button habit-decrease"
        type="button"
        onClick={() => onDecrement(habit)}
      >
        <i className="fas fa-minus-square" />
      </button>
      <button
        className="habit-button habit-delete"
        type="button"
        onClick={() => onDelete(habit)}
      >
        <i className="fas fa-trash" />
      </button>
      <button
        className="habit-button habit-reset"
        type="button"
        onClick={() => onReset(habit)}
      >
        <i className="fas fa-power-off" />
      </button>
    </li>
  );
});

export default Habit;
