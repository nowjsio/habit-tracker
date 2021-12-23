import React, { memo } from 'react';

const Navbar = memo(props => {
  const { activeHabitsCount } = props;
  return (
    <nav className="navbar">
      <i className="navbar-logo fas fa-leaf" />
      <span>Active Habit Count : </span>
      <span className="navbar-count">{activeHabitsCount}</span>
    </nav>
  );
});

export default Navbar;
