import React, { useState } from "react";
import TableRow from "../Table/TableRow";
import TableHead from "../Table/TableHead";
import TableData from "../Table/TableData";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const TableRetaurant = () => {
  const [open, setOpen] = useState(true);
  function handleOpen(open) {
    setOpen(open);
  }
  return (
    <div className="max-lg:overflow-scroll">
      <table className="w-full text-[15px] ">
        <thead className="bg-secondary text-white font-sans ">
          <tr>
            <TableHead title="" />
            <TableHead title="Restaurant ID" />
            <TableHead title="Restaurant Name" />
            <TableHead title="Restaurant Descrsption" />
            <TableHead title="Joining Date" />
            <TableHead title="Add Branch / Edit / Delete" />
          </tr>
        </thead>
        <tbody>
          <TableRow>
            <TableData
              title={
                <MdKeyboardArrowDown
                  onClick={() => handleOpen(!open)}
                  className={`text-2xl  duration-300 ${
                    open ? "rotate-0" : "-rotate-90"
                  }`}
                />
              }
            />
            <TableData title="John Doe" />
            <TableData title="30" />
            <TableData title="New York" />
            <TableData title="New York" />
            <td className="p-3  whitespace-nowrap text-center flex gap-x-10 items-center justify-center  text-[18px] ">
              <IoMdAdd />
              <FaPencilAlt className="text-[#6c757d]" />
              <FaTrashAlt className="text-[#d9534f]" />
            </td>
          </TableRow>
          <tr className={` ${open ? "" : "delay-300 duration-300 flex  w-0"}`}>
            <td
              colSpan="6"
              className="w-full border-t-[1px]  text-center   text-[18px] border-[#dee2e6]"
            >
              <div
                className={`  overflow-hidden duration-300  ${
                  open ? "h-full w-full " : "  w-0 h-0"
                }`}
              >
                <table className="w-full text-[13px]">
                  <caption className="font-bold text-[1.25rem]  p-3 text-start">
                    Branch
                  </caption>
                  <thead>
                    <tr>
                      <TableHead title="Branch ID" />
                      <TableHead title="Branch Name" />
                      <TableHead title="Branch Descrsption" />
                      <TableHead title="Joining Date" />
                      <TableHead title=" Edit / Delete" />
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow>
                      <TableData title="John Doe" />
                      <TableData title="30" />
                      <TableData title="New York" />
                      <TableData title="New York" />
                      <td className="p-3 whitespace-nowrap text-center flex gap-x-10 items-center justify-center  text-[15px] border-[#dee2e6]">
                        <FaPencilAlt className="text-[#6c757d]" />
                        <FaTrashAlt className="text-[#d9534f]" />
                      </td>
                    </TableRow>
                    <TableRow>
                      <TableData title="John Doe" />
                      <TableData title="30" />
                      <TableData title="New York" />
                      <TableData title="New York" />
                      <td className="p-3 whitespace-nowrap text-center flex gap-x-10 items-center justify-center  text-[15px] border-[#dee2e6]">
                        <FaPencilAlt className="text-[#6c757d]" />
                        <FaTrashAlt className="text-[#d9534f]" />
                      </td>
                    </TableRow>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableRetaurant;
