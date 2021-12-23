import React, { memo } from 'react';

const HabitAddForm = memo(props => {
  const { onSubmit, inputRef, formRef } = props;
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
});

export default HabitAddForm;
