import React from "react";
import Breadcrumb from "../../UI/Breadcrumb";
import CategoriesPanel from "../../UI/Category/CategoriesPanel";
import SuccessAlert from "../../UI/Alert/SuccessAlert";
import Loader from "../../UI/Loader/Loader";

const category = () => {
  return (
    <div>
      <Breadcrumb title="Categories List" />
      <SuccessAlert type='category'/>
      <CategoriesPanel />
    </div>
  );
};

export default category;
