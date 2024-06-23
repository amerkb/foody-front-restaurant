import React from "react";

import AddRestaurantPanel from "../../UI/Restaurant/AddRestaurantPanel";
import Breadcrumb from "../../UI/Breadcrumb";

const AddRestaurant = () => {
  return (
    <div>
      <Breadcrumb title="Add Restaurant" />

      <AddRestaurantPanel />
    </div>
  );
};

export default AddRestaurant;
