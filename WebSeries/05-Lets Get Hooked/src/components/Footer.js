import React from "react";

// FOOTER
const Footer = () => (
  <>
    <div className="footer-container">
      <div className="footer--copyright">
        <span> No &#169; for this.</span>
      </div>
      <div className="footer--links">
        <ul>
          <li>
            <a href="#" className="footer--links--item">
              Trending Restaurants
            </a>
          </li>
          <li>
            <a href="#" className="footer--links--item">
              New Restaurants
            </a>
          </li>
          <li>
            <a href="#" className="footer--links--item">
              Offers
            </a>
          </li>
        </ul>
      </div>
      <div className="footer--contact">
        <div className="footer--contact--address">
          <span>123, Block XYZ, Lower Parel, Mumbai</span>
        </div>
        <div className="footer--contact--phone">
          <span>+91 9876543210</span>
        </div>
      </div>
    </div>
  </>
);

export default Footer;
