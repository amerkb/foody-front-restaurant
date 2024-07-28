import React, { useEffect, useState } from "react";
import TableRow from "../Table/TableRow";
import TableHead from "../Table/TableHead";
import TableData from "../Table/TableData";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import axios from "axios";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import DeletePops from "../Pops/DeletePops";
import { useDispatch } from "react-redux";
import DeleteReducer, {
  setValueConfirm,
  setId,
} from "../../Redux/DeleteReducer";
import AddBranch from "../../Page/Branch/AddBranch";
import {
  setBranchId,
  setDescription,
  setName,
  setRestaurantId,
  setShow,
  setUpdate,
} from "../../Redux/BranchReducer";

const TableRetaurant = () => {
  const [open, setOpen] = useState(0);
  const [Restaurants, setRestaurants] = useState([]);
  const [loading, setLoader] = useState(true);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${window.host}/superAdmin/restaurant`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setRestaurants(response.data.data);
        setLoader(false);
      })
      .catch((error) => {
        console.error(error);
        setLoader(false);
      });
  }, [Restaurants]);
  function handleOpen(restaurant_id) {
    let value = open === restaurant_id ? 0 : restaurant_id;
    setOpen(value);
  }
  function handleOpenConfirm(restaurant_id) {
    dispatch(setValueConfirm("restaurant"));
    dispatch(setId(restaurant_id));
  }
  function handleOpenAddBranch(restaurant_id) {
    dispatch(setShow(true));
    dispatch(setUpdate(false));
    dispatch(setRestaurantId(restaurant_id));
  }
  function handleOpenUpdateBranch(Branch) {
    dispatch(setShow(true));
    dispatch(setUpdate(true));
    dispatch(setBranchId(Branch.branch_id));
    dispatch(setName(Branch.branch_name));
    dispatch(setDescription(Branch.branch_description));
  }
  function handleDeleteBranch(branch_id) {
    dispatch(setValueConfirm("branch"));
    dispatch(setId(branch_id));
  }
  return (
    <div
      className={`${
        loading ? "py-10" : "max-lg:overflow-x-scroll py-0"
      }    relative`}
    >
      {loading ? <Loader /> : ""}
      <DeletePops />
      <AddBranch />
      {loading ? (
        ""
      ) : (
        <table className="w-full text-[15px]  ">
          <thead className="bg-secondary text-white font-sans ">
            <tr>
              <TableHead title="" />
              <TableHead title="Restaurant ID" />
              <TableHead title="Restaurant Name" />
              <TableHead title="Restaurant Email" />
              <TableHead title="Restaurant Descrsption" />
              <TableHead title="Joining Date" />
              <TableHead title="Add Branch / Edit / Delete" />
            </tr>
          </thead>
          <tbody>
            {Restaurants.map((Restaurant) => (
              <React.Fragment key={Restaurant.restaurant_id}>
                <TableRow key={Restaurant.restaurant_id}>
                  <TableData
                    title={
                      <MdKeyboardArrowDown
                        onClick={() => handleOpen(Restaurant.restaurant_id)}
                        className={`text-2xl duration-300 ${
                          open === Restaurant.restaurant_id
                            ? "rotate-0"
                            : "-rotate-90"
                        }`}
                      />
                    }
                  />
                  <TableData title={Restaurant.restaurant_id} />
                  <TableData title={Restaurant.restaurant_name} />
                  <TableData title={Restaurant.restaurant_email} />
                  <TableData title={Restaurant.restaurant_description} />
                  <TableData title={Restaurant.joining_date} />
                  <td className="p-3 whitespace-nowrap text-center flex gap-x-10 items-center justify-center text-[18px]">
                    <IoMdAdd
                      onClick={() =>
                        handleOpenAddBranch(Restaurant.restaurant_id)
                      }
                    />
                    <Link
                      to={`/UpdateRestaurant/${Restaurant.restaurant_id}`}
                      color="inherit"
                      underline="none"
                    >
                      <FaPencilAlt className="text-[#6c757d]" />
                    </Link>

                    <FaTrashAlt
                      onClick={() =>
                        handleOpenConfirm(Restaurant.restaurant_id)
                      }
                      className="text-[#d9534f]"
                    />
                  </td>
                </TableRow>
                <tr
                  className={`${
                    open === Restaurant.restaurant_id
                      ? ""
                      : "delay-300 duration-300 flex w-0"
                  }`}
                >
                  <td
                    colSpan="7"
                    className="w-full border-t-[1px] text-center text-[18px] border-[#dee2e6]"
                  >
                    <div
                      className={`overflow-hidden   ${
                        open === Restaurant.restaurant_id ? "h-full" : "h-0"
                      }`}
                    >
                      <table className="w-full text-[13px]">
                        <caption className="font-bold text-[1.25rem] p-3 text-start">
                          Branch
                        </caption>
                        <thead>
                          <tr>
                            <TableHead title="" />
                            <TableHead title="Branch ID" />
                            <TableHead title="Branch Name" />
                            <TableHead title="Branch Description" />
                            <TableHead title="Joining Date" />
                            <TableHead title="Edit / Delete" />
                          </tr>
                        </thead>
                        <tbody>
                          {Restaurant.branchs.map((Branch) => (
                            <TableRow key={Branch.branch_id}>
                              <TableData title="" />
                              <TableData title={Branch.branch_id} />
                              <TableData title={Branch.branch_name} />
                              <TableData title={Branch.branch_description} />
                              <TableData title={Branch.joining_date} />
                              <td className="p-3 whitespace-nowrap text-center flex gap-x-10 items-center justify-center text-[15px] border-[#dee2e6]">
                                <FaPencilAlt
                                  onClick={() => handleOpenUpdateBranch(Branch)}
                                  className="text-[#6c757d]"
                                />
                                <FaTrashAlt
                                  onClick={() => handleDeleteBranch(Branch.branch_id)}
                                  className="text-[#d9534f]"
                                />
                              </td>
                            </TableRow>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableRetaurant;
