import React from "react";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return (
    <>
      <div className="res-container">
        <h1> Error 404 Not Found</h1>
        <p>{error.data}</p>
        <p>
          Click <Link to="/">here</Link> to go to home page
        </p>
      </div>
    </>
  );
};

export default NotFound;
