import React from "react";
import ReactDom from "react-dom/client";

// React Element => Object => Render => HTML Element
const heading = React.createElement(
  "div",
  { id: "container" },
  React.createElement("h1", { id: "heading" }, "Namaste React from React 🚀")
);
console.log(heading);

// JSX -> HTML Like Syntax what allows us to write javascript as well.
// JSX => Transpiler => React Element => Render => HTML Element
const jsxHeading = (
  <div id="container">
    <h1 id="heading" classNam e="heading">
      Namaste React from JSX 🚀
    </h1>
  </div>
);
console.log(jsxHeading);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(heading);
root.render(jsxHeading);

// COMPONENTS - Piece of react code that we can use multiple time at different places.
// Everything in react is component. button, cards ist of cards. etc.

// We have 2 types of components. Functional and class component but now a days we only use functional component.
const Heading = () => {
  return (
    <div id="container">
      <h1 id="heading" classNam e="heading">
        Namaste React from Functional Component 🚀
      </h1>
    </div>
  );
};

root.render(<Heading />);

// React.Fragment
const Details = () => {
  return (
    <React.Fragment>
      <Heading />
      <div id="details">
        <h2 id="detail--name">I am Siddhant Shah</h2>
      </div>
    </React.Fragment>
  );
};

root.render(<Details />);

// writing javascript inside JSX
const age = 30;
const firstName = `Siddhant`;
const lastName = `Shah`;
const DetailsJS = () => {
  return (
    <React.Fragment>
      <Heading />
      <div id="details">
        <h2 id="detail--name">
          I am {`${firstName} ${lastName}`}. I am {age} years old
        </h2>
      </div>
    </React.Fragment>
  );
};

root.render(<DetailsJS />);
