import React from "react";
import ReactDOM from "react-dom/client";

// function to render Hello World using React
const renderRoot = () => {
  // creating an react element (object)
  const heading = React.createElement("h1", {}, "Hello World using React!!");

  // creating an react element (object) with a child with style
  const headingWithChild = React.createElement(
    "h1",
    {},
    React.createElement(
      "span",
      { id: "heading", style: { color: "green" } },
      "Hello World using React with Child!!"
    )
  );

  // creating an react element (object) with a child with CSS Class
  const headingWithChildCSS = React.createElement(
    "h1",
    {},
    React.createElement(
      "span",
      { id: "heading", className: "heading" },
      "Hello World using React with Child and CSS class!!"
    )
  );

  // creating a root by accessing the element with id root-react
  const root = ReactDOM.createRoot(document.getElementById("root-react"));

  /** create below structure
   *  <div id="parent">
   *      <div id="child">
   *          <h1 id="child-heading">
   *              <span class="structure">This is from defined structure</span>
   *          </h1>
   *      </div>
   *  </div>
   */
  const a2 = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      React.createElement(
        "h1",
        { id: "child-heading" },
        React.createElement(
          "span",
          { className: "structure" },
          "This is from defined structure"
        )
      )
    )
  );

  const structured_el = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      React.createElement(
        "h1",
        { id: "child-heading" },
        React.createElement(
          "span",
          { className: "structure" },
          "Hello World using React with defined structure"
        )
      )
    )
  );

  /** create below structure
   *  <div id="parent">
   *      <div id="child">
   *          <h1 id="child-heading-1">
   *              <span class="structure-sibling-1">Coming from 1st Sibling</span>
   *          </h1>
   *          <h1 id="child-heading-2">
   *              <span class="structure-sibling-2">Coming from 2nd Sibling</span>
   *          </h1>
   *      </div>
   *  </div>
   */
  const structured_el2 = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
      React.createElement(
        "h1",
        { id: "child-heading-1" },
        React.createElement(
          "span",
          { className: "structure-sibling-1" },
          "Hello World using React with 1st Sibling"
        )
      ),
      React.createElement(
        "h1",
        { id: "child-heading-2" },
        React.createElement(
          "span",
          { className: "structure-sibling-2" },
          "Hello World using React with 2nd Sibling"
        )
      ),
    ])
  );

  // root.render(heading);
  // root.render(heading);
  // root.render(headingWithChild);
  // root.render(headingWithChildCSS);
  // root.render(a2);
  // root.render(structured_el);
  root.render(structured_el2);
};

renderRoot();
