import React, { useState, Component } from "react";
import { ButtonFunctional, ButtonClass } from "./Button";
import { GreetingClass } from "./Greetings";

export const CounterFunctional = () => {
  const [counter, setCounter] = useState(0);

  const counterIncrease = () => setCounter(counter + 1);
  const counterDecrease = () => setCounter(counter - 1);

  return (
    <>
      <h1>From Functional Component</h1>
      <h3>Counter: {counter}</h3>
      <ButtonFunctional
        buttonMessage="Increase"
        updateCounter={counterIncrease}
      />
      <ButtonFunctional
        buttonMessage="Decrease"
        updateCounter={counterDecrease}
      />
    </>
  );
};

export class CounterClass extends Component {
  // constructor is not must have method is class component but if we want to use props and state in component, than we have to use constructor
  constructor(props) {
    super(props); // this has t be the 1st line in constructor

    console.log(`Counter # ${this.props.number} Constructor`);
    // this is how we define a state in class. In class we all our state wrapped inside one object and not like function where we every state is a different object.
    this.state = {
      counter: 0,
      name: "Siddhant",
    };

    // binding this keyword to method counterIncrease
    this.counterIncrease = this.counterIncrease.bind(this);

    // binding this keyword to method counterDecrease
    this.counterDecrease = this.counterDecrease.bind(this);
  }

  // method to increase counter by 1
  counterIncrease() {
    console.log("Clicked Increase button");

    // this is how we manipulate state of  class. We use setState function and use only that state which we need to change. Other states in object thar are not mentioned in setState, will remain unchanged.
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  // method to decrease counter by 1
  counterDecrease() {
    console.log("Clicked Decrease button");

    // this is how we manipulate state of  class. We use setState function and use only that state which we need to change. Other states in object thar are not mentioned in setState, will remain unchanged.
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  componentDidMount() {
    console.log(`Counter # ${this.props.number} ComponentDidMount`);
  }

  componentDidUpdate() {
    console.log(`Counter # ${this.props.number} ComponentDidUpdate`);
  }

  componentWillUnmount() {
    console.log(`Counter # ${this.props.number} ComponentWillUnmount`);
  }

  // most important and must have function in class component
  render() {
    console.log(`Counter # ${this.props.number} Render`);
    return (
      <>
        <h1>From Class Component # {this.props.number}</h1>
        <GreetingClass name="HR" />
        <h3>Counter: {this.state.counter}</h3>
        <ButtonClass
          updateCounter={this.counterIncrease}
          buttonMessage="Increase Counter"
          waitTime={5000}
        />
        <ButtonClass
          updateCounter={this.counterDecrease}
          buttonMessage="Decrease Counter"
          waitTime={1000}
        />
      </>
    );
  }
}
