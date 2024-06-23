import React from "react";
import Breadcrumb from "../../UI/Breadcrumb";
import RestaurantList from "../../UI/Restaurant/RestaurantListPanel";
import SuccessAlert from "../../UI/Alert/SuccessAlert";

const Restaurant = () => {
  return (
    <div>
      <Breadcrumb title="Restaurant List" />
      <SuccessAlert/>
      <RestaurantList />
    </div>
  );
};

export default Restaurant;
