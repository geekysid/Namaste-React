import React, { useEffect, useState } from "react";
import RestaurantCard, { RestaurantShimmer } from "./RestaurantCard";
import Heading from "./Typography/Heading";
import Button, { ButtonShimmer } from "./Button";
import { RES_IMAGE_DOMAIN, SWIGGY_URL } from "../utils/constants";
import "./Restaurants.css";
import "./Shimmer.css";

// RESTAURANT COMPONENT
const Restaurants = () => {
  // state variable to manage list of Restaurants
  const [restaurantList, setRestaurantList] = useState([]);

  // state variable to manage filtered list of restaurants
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  // state variable to monitor page number
  const [currentPage, setCurrentPage] = useState(1);

  // state variable to monitor search text
  const [searchText, setSearchText] = useState("");

  // state variable to manage veg/non-veg restaurants
  const [vegNonVeg, setVegNonVeg] = useState(false);

  // function to return restaurants that has ratings greater than 4.0
  const filterHigRatingRest = (event) => {
    toggleActiveBTNClass(event);
    setFilteredRestaurant(
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
    setFilteredRestaurant(filteredList);
  };

  // function to show all restaurants without any filters
  const showAllFilter = (event) => {
    toggleActiveBTNClass(event);
    showAll();
  };

  // function to show all restaurants without any filters
  const showAll = () => {
    setFilteredRestaurant(restaurantList);
  };

  // function to filter / un-filter veg restaurants
  const filterVeg = (event) => {
    toggleActiveBTNClass(event);
    setVegNonVeg(!vegNonVeg);
  };

  // change look of active button
  const toggleActiveBTNClass = (event) => {
    // function to remove active class from all button
    for (el of document.getElementsByClassName("res-filter--btn")) {
      el.classList.remove("res-filter--btn-active");
    }

    // adding active class to clicked button
    event.target.classList.add("res-filter--btn-active");
  };

  // whenever we have change in input text, filter restaurants
  const onChangeSearchText = (e) => {
    setSearchText(e.target.value);
    setFilteredRestaurant(
      restaurantList.filter((restaurant) =>
        restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  // whenever used toggles between veg and non-veg
  useEffect(() => {
    setFilteredRestaurant(() => {
      if (vegNonVeg) {
        return restaurantList.filter(
          (restaurant) => restaurant.data.veg === vegNonVeg
        );
      } else {
        return restaurantList;
      }
    });
  }, [vegNonVeg]);

  // fetching data from swiggy api
  const fetchSwiggyData = async (loadMore = false) => {
    try {
      // const data = await axios.get(SWIGGY_URL); // call swiggy API to get data
      const data = await fetch(
        `${SWIGGY_URL}&offset=${restaurantList.length + 1}`
      ); // call swiggy API to get data

      // the API returns data in readable stream format. We need to convert it into json.
      const json_data = await data.json();
      const restaurants =
        loadMore === true
          ? json_data?.data?.cards
          : json_data?.data?.cards[2]?.data?.data?.cards;

      setRestaurantList([...restaurantList, ...restaurants]);
      setFilteredRestaurant([...restaurantList, ...restaurants]);
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  // useEffect to call swiggy api and get restaurant's list
  useEffect(() => {
    fetchSwiggyData();
    console.log(filteredRestaurant);
  }, []);

  return (
    <>
      <div className="res-container">
        <Heading text="Restaurants" />

        {filteredRestaurant.length > 0 ? (
          <>
            <div className="res-filter">
              {/* ONLY VEG RESTAURANT */}
              <Button
                className="res-filter--btn"
                id="show-all-btn"
                clickHandler={showAllFilter}
                text="Show All"
              />

              {/* BEST RESTAURANT FILTER */}
              <Button
                className="res-filter--btn"
                id="best-filter-btn"
                clickHandler={filterHigRatingRest}
                text="Best Restaurant"
              />
              {/* RESTAURANT PRICE <=250 */}
              <Button
                className="res-filter--btn"
                clickHandler={filterOnPrice}
                text="Price <= 250"
                dataArgs="Less Than 250"
              />
              {/* RESTAURANT PRICE > 250 */}
              <Button
                className="res-filter--btn"
                clickHandler={filterOnPrice}
                text="Price > 250"
                dataArgs="Greater Than 250"
              />

              {/* ONLY VEG RESTAURANT */}
              <Button
                className="res-filter--btn"
                clickHandler={filterVeg}
                text="Only Veg"
                id="veg-filter-btn"
              />
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
              {filteredRestaurant.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.data.id}
                  restaurantName={restaurant.data.name}
                  imageUrl={
                    RES_IMAGE_DOMAIN + restaurant.data.cloudinaryImageId
                  }
                  cuisine={restaurant.data.cuisines.join(", ")}
                  rating={restaurant.data.avgRating}
                  price={restaurant.data.costForTwoString}
                  deliveryTime={restaurant.data.deliveryTime}
                />
              ))}
            </div>

            {/* LOAD MORE BUTTON */}
            <div className="load-more-container">
              <Button
                className="res-filter--btn"
                clickHandler={() => fetchSwiggyData((loadMore = true))}
                text="Load More"
              />
            </div>
          </>
        ) : (
          <>
            <div className="res-filter">
              {Array(5)
                .fill("")
                .map((el, index) => (
                  <ButtonShimmer key={index} />
                ))}
            </div>

            {/* LIST OF RESTAURANTS */}
            <div className="res-container--list">
              {Array(10)
                .fill("")
                .map((el, index) => (
                  <RestaurantShimmer key={index} />
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Restaurants;
