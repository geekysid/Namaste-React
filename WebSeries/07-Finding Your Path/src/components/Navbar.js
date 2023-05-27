// HEADER COMPONENT TO BE DISPLAYED IN OUR APP
import React from "react";
import { LOGO_PATH } from "../utils/constants";
import { Link } from "react-router-dom";

const Navbar = () => (
  <>
    <div className="header">
      <div className="branding-info">
        <div className="branding--logo">
          <img className="branding--logo--img" src={LOGO_PATH} />
          {/* <img
            className="header--logo--img"
            src="https://e7.pngegg.com/pngimages/360/735/png-clipart-food-delivery-online-food-ordering-restaurant-delivery-bite-food-delivery-online-food-ordering.png"
          /> */}
        </div>
        <div className="branding--text">
          <span className="branding--text--brand">Food Runner</span>
        </div>
      </div>
      <div className="nav-container">
        <ul className="nav--links">
          <li className="nav--links--item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav--links--item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav--links--item">Services</li>
          <li className="nav--links--item">Free Demo</li>
          <li className="nav--links--item">Contact</li>
        </ul>
      </div>
    </div>
  </>
);

export default Navbar;
