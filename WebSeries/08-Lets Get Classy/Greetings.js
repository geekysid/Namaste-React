import React from "react";

export class GreetingClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(`Greetings Constructor`);
  }

  componentDidMount() {
    console.log(`Greetings ComponentDidMount`);
  }

  componentDidUpdate() {
    console.log(`Greetings ComponentDidUpdate`);
  }

  componentWillUnmount() {
    console.log(`Greetings ComponentWillUnmount`);
  }

  // most important and must have function in class component
  render() {
    console.log(`Greetings Render`);
    return <h2>Hello {this.props.name}!</h2>;
  }
}
