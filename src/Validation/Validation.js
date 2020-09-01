import React, { Component } from "react";

class Validation extends Component {
  render() {
    let message =
      this.props.text.length < 5 ? "text too short" : "text long enough";
    return (
      <div>
        <p>{message}</p>
      </div>
    );
  }
}

export default Validation;
