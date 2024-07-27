import React from "react";
import PanelHead from "../Panel/PanelHead";
import PanelBody from "../Panel/PanelBody";
import MealForm from "./MealForm";


const MealPanel = ({title}) => {
  return (
    <div>
      <PanelHead title={title} />
      <PanelBody content={<MealForm />} />
     
    </div>
  );
};

export default MealPanel;
