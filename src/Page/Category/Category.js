import React from "react";
import Breadcrumb from "../../UI/Breadcrumb";
import CategoriesPanel from "../../UI/Category/CategoriesPanel";
import SuccessAlert from "../../UI/Alert/SuccessAlert";
import Loader from "../../UI/Loader/Loader";

const Restaurant = () => {
  return (
    <div>
      <Breadcrumb title="Categories List" />
      <SuccessAlert type='category'/>
      <CategoriesPanel />
    </div>
  );
};

export default Restaurant;
