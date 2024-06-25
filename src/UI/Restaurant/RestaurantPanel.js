import React from "react";
import PanelHead from "../Panel/PanelHead";
import PanelBody from "../Panel/PanelBody";
import FormRestaurant from "./FormRestaurant";


const RestaurantPanel = ({title}) => {
  return (
    <div>
      <PanelHead title={title} />
      <PanelBody content={<FormRestaurant />} />
    </div>
  );
};

export default RestaurantPanel;
