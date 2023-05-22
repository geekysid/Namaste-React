import React from "react";
import "./shimmer.css";

const Button = (props) => {
  return (
    <div
      className={props.className}
      id={props.id}
      onClick={props.clickHandler}
      data-arg={props.dataArgs}
    >
      {props.text}
    </div>
  );
};

const ButtonShimmer = () => {
  return <div className="btn--shimmer shimmer"></div>;
};

export default Button;
export { ButtonShimmer };
