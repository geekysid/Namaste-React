// RESTAURANT CARDS
import React from "react";
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

export default RestaurantCard;
