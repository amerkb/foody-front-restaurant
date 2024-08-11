import React from "react";
import Breadcrumb from "../../UI/Breadcrumb";
import SuccessAlert from "../../UI/Alert/SuccessAlert";
import Loader from "../../UI/Loader/Loader";
import TablesPanel from "../../UI/Tables/TablesPanel";

const Table = () => {
  return (
    <div>
      <Breadcrumb title="Tables List" />
      <SuccessAlert type='table'/>
      <TablesPanel />
    </div>
  );
};

export default Table;
