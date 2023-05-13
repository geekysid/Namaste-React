import React from "react";
import ReactDOM from "react-dom/client";
import data from "./swiggy.json";
import "./style.css";

console.log(data);

// creating react root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// HEADER
const Navbar = () => (
  <div className="nav-container">
    <ul className="nav--links">
      <li className="nav--links--item">Home</li>
      <li className="nav--links--item">About Us</li>
      <li className="nav--links--item">Services</li>
      <li className="nav--links--item">Free Demo</li>
      <li className="nav--links--item">Contact</li>
    </ul>
  </div>
);

const Branding = () => (
  <div className="branding-info">
    <div className="branding--logo">
      <img className="branding--logo--img" src="./logo.png" />
      {/* <img
          className="header--logo--img"
          src="https://e7.pngegg.com/pngimages/360/735/png-clipart-food-delivery-online-food-ordering-restaurant-delivery-bite-food-delivery-online-food-ordering.png"
        /> */}
    </div>
    <div className="branding--text">
      <span className="branding--text--brand">Food Runner</span>
    </div>
  </div>
);

const Header = () => (
  <>
    <div className="header">
      <Branding />
      <Navbar />
    </div>
  </>
);

// CAROUSAL

// RESTAURANTS
const restaurantData = data.data.cards[2];
let restaurantList = [];
if (restaurantData.cardType === "seeAllRestaurants") {
  restaurantList = restaurantData.data.data.cards;
} else {
  restaurantList = [];
}
console.log(restaurantList);

//
const Heading = (props) => <div className="heading">{props.text}</div>;

//
const RestaurantCard = (props) => {
  return (
    <>
      <div className="card-container">
        {/* Image */}
        <div className="card--img">
          <img className="" src={props.imageUrl} alt="Restaurant Image" />
        </div>
        <hr />
        {/* Heading */}
        <div className="card--heading">
          <h4>{props.restaurantName}</h4>
        </div>
        {/* Cuisine */}
        <div className="card--sub-heading">
          <span className="sub-heading">{props.cuisine}</span>
        </div>
        {/* Rating | Div Time | Price for 2 */}
        <div className="card--text">
          <span className="rating">{props.rating} ratings</span>
          <span className="">{props.deliveryTime} mins</span>
          <span className="text">{props.price.toLowerCase()}</span>
        </div>
      </div>
    </>
  );
};

//
const RestaurantList = () => (
  <div className="res-container--list">
    {restaurantList.map((restaurant) => (
      <RestaurantCard
        key={restaurant.data.id}
        restaurantName={restaurant.data.name}
        imageUrl={`
          https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurant.data.cloudinaryImageId}
          `}
        cuisine={restaurant.data.cuisines.join(", ")}
        rating={restaurant.data.avgRating}
        price={restaurant.data.costForTwoString}
        deliveryTime={restaurant.data.deliveryTime}
      />
    ))}
  </div>
);

//
const Restaurant = () => (
  <>
    <div className="res-container">
      <Heading text="Restaurants" />
      <RestaurantList />
    </div>
  </>
);

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

root.render(
  <>
    <div className="container">
      <Header />
      <Restaurant />
      <Footer />
    </div>
  </>
);
