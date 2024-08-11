import React from "react";
import PanelHead from "../Panel/PanelHead";
import PanelBody from "../Panel/PanelBody";
import TablesTable from "./TablesTable";

const TablesPanel = () => {
  return (
    <div>
      <PanelHead title="Tables List " />
      <PanelBody content={<TablesTable />} />
    </div>
  );
};

export default TablesPanel;
