import React from "react";
import Breadcrumb from "../../UI/Breadcrumb";
import SuccessAlert from "../../UI/Alert/SuccessAlert";
import EmployeePanel from "../../UI/Employee/EmployeePanel";

const Employees = () => {
  return (
    <div>
      <Breadcrumb title="Employees List" />
      <SuccessAlert type='employee'/>
      <EmployeePanel />
    </div>
  );
};

export default Employees;
