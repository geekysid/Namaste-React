import React, { useState, useEffect } from "react";
import Heading from "./Typography/Heading";
import { useParams } from "react-router-dom";
import { SWIGGY_MENU_API } from "../utils/constants";

const RestaurantDetail = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const menu = await fetch(SWIGGY_MENU_API + id);
    const menu_data = await menu.json();
    console.log(menu_data);
    setRestaurant(menu_data);
  };

  return restaurant ? (
    <>
      <div className="res-container">
        <Heading text="Restaurant Page" />
        <p>Restaurant: {id}</p>
        <div className="restaurant">
          <h2>
            {restaurant?.data?.cards[0]?.card?.card?.info.name} (
            {restaurant?.data?.cards[0]?.card?.card?.info.avgRating} ||
            {restaurant?.data?.cards[0]?.card?.card?.info.totalRatingsString})
          </h2>
          <div>
            {restaurant?.data?.cards[0]?.card?.card?.info.areaName},{" "}
            {restaurant?.data?.cards[0]?.card?.card?.info.city}
          </div>
          <div>
            Avg Cost:
            {restaurant?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <h1>We will have shimmer</h1>
    </>
  );
};

export default RestaurantDetail;
