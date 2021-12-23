import React, { Component } from 'react';
import '../app.css';
import '@fortawesome/fontawesome-free/js/all.js';

class SimpleHabit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Coding',
      count: 0,
    };
  }

  handleIncrement = event => {
    event.preventDefault();
    const { name, count } = this.state;
    this.setState({ name, count: count + 1 });
  };

  render() {
    const { name, count } = this.state;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          type="button"
          className="habit-button habit-increase"
          onClick={event => this.handleIncrement(event)}
        >
          <i className="fas fa-plus-square" />
        </button>
      </li>
    );
  }
}

export default SimpleHabit;
