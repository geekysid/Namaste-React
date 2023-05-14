import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

// creating react root element
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <div className="container">
      <Navbar />
      <Body />
      <Footer />
    </div>
  </>
);
