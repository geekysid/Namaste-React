import React, { Component } from "react";

export const ButtonFunctional = (props) => {
  return <button onClick={props.updateCounter}>{props.buttonMessage}</button>;
};

export class ButtonClass extends Component {
  constructor(props) {
    super(props);
    console.log(`Button Constructor: ${this.props.buttonMessage}`);
  }

  componentDidMount() {
    console.log(`Button ComponentDidMount: ${this.props.buttonMessage}`);
    setTimeout(() => {
      console.log(
        `Button ComponentDidMount: ${this.props.buttonMessage} - ENDS`
      );
    }, this.props.waitTime);
  }

  componentDidUpdate() {
    console.log(`Button ComponentDidUpdate: ${this.props.buttonMessage}`);
  }

  componentWillUnmount() {
    console.log(`Button ComponentWillUnmount: ${this.props.buttonMessage}`);
  }

  render() {
    console.log(`Button Render: ${this.props.buttonMessage}`);
    return (
      <button onClick={this.props.updateCounter}>
        {this.props.buttonMessage}
      </button>
    );
    // return <button>Class Button</button>;
  }
}
