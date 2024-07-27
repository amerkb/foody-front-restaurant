import React from "react";

import MealPanel from "../../UI/Meal/MealPanel";
import Breadcrumb from "../../UI/Breadcrumb";
import { useParams } from "react-router-dom";

const AddMeal = () => {
  const { id } = useParams();

  return (
    <div>
      <Breadcrumb title={`${id ? "Update" : "Add"} Meal`} />
      <MealPanel title={`${id ? "Update" : "Add"} Meal`} />
    </div>
  );
};

export default AddMeal;
