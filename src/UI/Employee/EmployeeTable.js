import React, { useEffect, useState } from "react";
import TableRow from "../Table/TableRow";
import TableHead from "../Table/TableHead";
import TableData from "../Table/TableData";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import Loader from "../Loader/Loader";
import DeletePops from "../Pops/DeletePops";
import { useDispatch, useSelector } from "react-redux";
import Switch from "@mui/material/Switch";
import DeleteReducer, {
  setValueConfirm,
  setId,
} from "../../Redux/DeleteReducer";

import AddEmployee from "../../Page/Employee/AddEmployee";
import { setSuccessEmployee } from "../../Redux/AlertReducer";
import {
  setData,
  SetRefetchEmployee,
  setShow,
  setUpdate,
} from "../../Redux/EmployeeReducer";

const EmployeeTable = () => {
  const [Employees, setEmployees] = useState([]);
  const [switchStates, setSwitchStates] = useState({});
  const Refetch = useSelector((state) => state.Employee.Refetch);
  const [loading, setLoader] = useState(true);
  const token = localStorage.getItem("token");
  const branch_id = localStorage.getItem("branch_id");
  const dispatch = useDispatch();
  const handleSwitchChange = async (id, newChecked) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [id]: newChecked,
    }));
    axios
      .put(
        `${window.host}/Admin/activeemp/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        dispatch(setSuccessEmployee(true));
        dispatch(SetRefetchEmployee(Refetch + 1));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .get(`${window.host}/Admin/Employee?branch_id=${branch_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setEmployees(response.data.data);
        setSwitchStates(
          response.data.data.reduce((acc, table) => {
            acc[table.id] = table.active;
            return acc;
          }, {})
        );
        setLoader(false);
      })
      .catch((error) => {
        console.error(error);
        setLoader(false);
      });
  }, [Refetch]);

  function handleOpenConfirm(employee_id) {
    dispatch(setValueConfirm("Employee"));
    dispatch(setId(employee_id));
  }
  function handleUpdateEmployee(Employee) {
    dispatch(setShow(true));
    dispatch(setUpdate(true));
    dispatch(setData(Employee));
  }
  function handleStoreEmployee() {
    dispatch(setUpdate(false));
    dispatch(setShow(true));
    dispatch(setData({ name: "" }));
  }

  return (
    <div
      className={`${
        loading ? "py-10" : "max-lg:overflow-x-scroll py-0"
      }    relative`}
    >
      {loading ? (
        ""
      ) : (
        <div
          onClick={() => handleStoreEmployee()}
          className="bg-secondary text-center hover:bg-[#bc2634] duration-200 mb-4 text-white font-bold float-right
       w-fit  px-4 py-[0.625rem] text-[14px] rounded-[0.25rem] border-[1px] border-transparent"
        >
          Add Empolyee
        </div>
      )}
      {loading ? <Loader /> : ""}
      <DeletePops />
      <AddEmployee />
      {loading ? (
        ""
      ) : (
        <table className="w-full text-[15px]  ">
          <thead className="bg-secondary text-white font-sans ">
            <tr>
              <TableHead title="Employee ID" />
              <TableHead title="Employee Name" />
              <TableHead title="Employee Email" />
              <TableHead title="Employee Type" />
              <TableHead title="Active  /  Edit /  Delete" />
            </tr>
          </thead>
          <tbody>
            {Employees.map((Employee) => (
              <TableRow key={Employee.id}>
                <TableData title={Employee.id} />
                <TableData title={Employee.name} />
                <TableData title={Employee.email} />
                <TableData
                  title={Employee.user_type === 1 ? "waiter" : "chef"}
                />
                <td className="p-3 whitespace-nowrap text-center flex gap-x-10 items-center justify-center text-[18px]">
                  <Switch
                    onChange={(event) =>
                      handleSwitchChange(Employee.id, event.target.checked)
                    }
                    checked={switchStates[Employee.id]}
                    color="warning"
                  />

                  <FaPencilAlt
                    className="text-[#6c757d]"
                    onClick={() => handleUpdateEmployee(Employee)}
                  />

                  <FaTrashAlt
                    onClick={() => handleOpenConfirm(Employee.id)}
                    className="text-[#d9534f]"
                  />
                </td>
              </TableRow>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeTable;
