/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';

// eslint-disable-next-line react/prefer-stateless-function
class Habit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // state = {
  //   count: 0,
  // };

  // handleIncrement(event) {
  //   console.log(evnet);
  // }
  // handleIncrement = () => {
  //   const { count } = this.state;
  //   const result = count + 1;
  //   this.setState({ count: result });
  // };

  // handleDecrement = () => {
  //   const { count } = this.state;
  //   const result = count - 1;
  //   this.setState({ count: result < 0 ? 0 : result });
  // };

  render() {
    // console.log(this.props);
    const { onIncrement, onDecrement, onDelete, habit, onReset } = this.props;
    const { name, count } = this.props.habit;

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
  }
}
export default Habit;
