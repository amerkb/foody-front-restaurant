import React from "react";
import PanelHead from "../Panel/PanelHead";
import PanelBody from "../Panel/PanelBody";
import FormRestaurant from "./FormRestaurant";

const AddRestaurant = () => {
  return (
    <div>
      <PanelHead title="Add Restaurant" />
      <PanelBody content={<FormRestaurant />} />
    </div>
  );
};

export default AddRestaurant;
