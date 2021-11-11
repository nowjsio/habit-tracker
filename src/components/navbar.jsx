/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="navbar">
        <i className="navbar-logo fas fa-leaf" />
        <span>Active Habit Count : </span>
        <span className="navbar-count">{this.props.activeHabitsCount}</span>
      </nav>
    );
    // return <div> {this.props.activeHabitsCount}</div>;
  }
}

export default Navbar;
