import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Heading from "./Typography/Heading";
import data from "../utils/swiggy.json";
import { RES_IMAGE_DOMAIN } from "../utils/constants";
import "./Restaurant.css";

const restaurantData = data.data.cards[2];

console.log(restaurantData);

let restaurantList = [];
if (restaurantData.cardType === "seeAllRestaurants") {
  restaurantList = restaurantData.data.data.cards;
} else {
  restaurantList = [];
}

const Restaurants = () => {
  // state variable to manage list of Restaurants
  const [restaurantListState, setRestaurantListState] =
    useState(restaurantList);

  // state variable to monitor search text
  const [searchText, setSearchText] = useState("");

  // state variable to manage veg/non-veg restaurants
  const [vegNonVeg, setVegNonVeg] = useState(false);

  // function to return restaurants that has ratings greater than 4.0
  const filterHigRatingRest = (event) => {
    toggleActiveBTNClass(event);
    setRestaurantListState(
      restaurantList.filter(
        (restaurant) => parseFloat(restaurant.data.avgRating) >= 4.0
      )
    );
  };

  // function to return restaurants that has value depending on the btn clicked
  const filterOnPrice = (event) => {
    toggleActiveBTNClass(event);
    let filteredList = [];
    if (event.target.getAttribute("data-arg") === "Greater Than 250") {
      filteredList = restaurantList.filter(
        (restaurant) => restaurant.data.costForTwo > 25000
      );
    } else if (event.target.getAttribute("data-arg") === "Less Than 250") {
      filteredList = restaurantList.filter(
        (restaurant) => restaurant.data.costForTwo <= 25000
      );
    }
    setRestaurantListState(filteredList);
  };

  // function to show all restaurants without any filters
  const showAllFilter = (event) => {
    toggleActiveBTNClass(event);
    showAll();
  };

  // function to show all restaurants without any filters
  const showAll = () => {
    setRestaurantListState(restaurantList);
  };

  // function to filter / un-filter veg restaurants
  const filterVeg = (event) => {
    toggleActiveBTNClass(event);
    setVegNonVeg(!vegNonVeg);
  };

  const toggleActiveBTNClass = (event) => {
    // function to remove active class from all button
    for (el of document.getElementsByClassName("res-filter--btn")) {
      el.classList.remove("res-filter--btn-active");
    }

    // adding active class to clicked button
    event.target.classList.add("res-filter--btn-active");
  };

  const onChangeSearchText = (e) => {
    setSearchText(e.target.value);
    setRestaurantListState(
      restaurantList.filter((restaurant) =>
        restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setRestaurantListState(() => {
      if (vegNonVeg) {
        return restaurantList.filter(
          (restaurant) => restaurant.data.veg === vegNonVeg
        );
      } else {
        return restaurantList;
      }
    });
  }, [vegNonVeg]);

  return (
    <>
      <div className="res-container">
        <Heading text="Restaurants" />
        <div className="res-filter">
          {/* ONLY VEG RESTAURANT */}
          <div
            className="res-filter--btn"
            id="show-all-btn"
            onClick={showAllFilter}
          >
            Show All
          </div>
          {/* BEST RESTAURANT FILTER */}
          <div className="res-filter--btn" onClick={filterHigRatingRest}>
            Best Restaurants
          </div>
          {/* RESTAURANT PRICE <=250 */}
          <div
            className="res-filter--btn"
            data-arg="Less Than 250"
            onClick={filterOnPrice}
          >
            {"Price <= 250"}
          </div>
          {/* RESTAURANT PRICE > 250 */}
          <div
            className="res-filter--btn"
            data-arg="Greater Than 250"
            onClick={filterOnPrice}
          >
            {"Price > 250"}
          </div>
          {/* ONLY VEG RESTAURANT */}
          <div
            className="res-filter--btn"
            id="veg-filter-btn"
            onClick={filterVeg}
          >
            Only Veg
          </div>
          {/* SEARCH RESTAURANT */}
          <div className="search-box--container">
            <input
              className="search-box--input"
              type="text"
              placeholder="Type to Search"
              value={searchText}
              onChange={onChangeSearchText}
            />
          </div>
        </div>

        {/* LIST OF RESTAURANTS */}
        <div className="res-container--list">
          {restaurantListState.map((restaurant) => (
            <RestaurantCard
              key={restaurant.data.id}
              restaurantName={restaurant.data.name}
              imageUrl={RES_IMAGE_DOMAIN + restaurant.data.cloudinaryImageId}
              cuisine={restaurant.data.cuisines.join(", ")}
              rating={restaurant.data.avgRating}
              price={restaurant.data.costForTwoString}
              deliveryTime={restaurant.data.deliveryTime}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Restaurants;
