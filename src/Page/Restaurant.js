import React from "react";
import Breadcrumb from "../UI/Breadcrumb";
import RestaurantList from "../UI/Restaurant/RestaurantList";
import AddRestaurant from "../UI/Restaurant/AddRestaurant";

const Restaurant = () => {
  return (
    <div>
      <Breadcrumb title="Restaurant List" />
      {/* <RestaurantList /> */}
      <AddRestaurant/>
    </div>
  );
};

export default Restaurant;
