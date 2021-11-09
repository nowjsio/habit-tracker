/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="navbar">
        Active Habit Count: {this.props.activeHabitsCount}
      </nav>
    );
    // return <div> {this.props.activeHabitsCount}</div>;
  }
}

export default Navbar;
