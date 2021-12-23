import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import '../app.css';
import '@fortawesome/fontawesome-free/js/all.js';

const SimpleHabit = memo(() => {
  const [habit, setHabit] = useState({ name: 'Coding', count: 0 });
  const spanRef = useRef();
  const inputRef = useRef();
  console.log('[!]spanRef: ', spanRef.current);
  console.log('[!]inputRef: ', inputRef.current);
  const handleIncrement = useCallback(event => {
    event.preventDefault();
    const { name, count } = habit;
    setHabit({ name, count: count + 1 });
  });

  /**
   *  해당 line 은 componentDidMout and componentDidUpadte 와 동일
   useEffect(() => { 
     console.log('TEST', habit.count, habit.name);
   });
   */

  /**
   *  해당 line 은 componentDidMout 와 동일
   useEffect(() => { 
     console.log('TEST', habit.count, habit.name);
   }, []);
   */

  // 해당 line 은 componentDidUpadte 와 동일
  useEffect(() => {
    console.log('TEST', habit.count, habit.name);
    return () => {
      console.log('TTTTTTTTT');
    };
  }, [habit.count]);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        {habit.name}
      </span>
      <span className="habit-count">{habit.count}</span>
      <button
        type="button"
        className="habit-button habit-increase"
        onClick={event => handleIncrement(event)}
      >
        <i className="fas fa-plus-square" />
      </button>
      <input ref={inputRef} type="text" className="test-input" />
    </li>
  );
});

export default SimpleHabit;
