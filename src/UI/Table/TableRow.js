import React from "react";

const TableRow = ({ children }) => {
  return (
    <tr className="border-t-[1px]  duration-300 hover:bg-[#00000013]  border-[#dee2e6]">
      {children}
    </tr>
  );
};

export default TableRow;
