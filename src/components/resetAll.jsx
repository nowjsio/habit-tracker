/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class ResetAll extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button
        className="habits-reset"
        type="button"
        onClick={this.props.onResetAll}
      >
        Reset
      </button>
    );
  }
}

export default ResetAll;
