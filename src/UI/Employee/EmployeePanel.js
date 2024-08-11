import React from "react";
import PanelHead from "../Panel/PanelHead";
import PanelBody from "../Panel/PanelBody";
import EmployeeTable from "./EmployeeTable";

const EmployeePanel = () => {
  return (
    <div>
      <PanelHead title="Employee List " />
      <PanelBody content={<EmployeeTable />} />
    </div>
  );
};

export default EmployeePanel;
