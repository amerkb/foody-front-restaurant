import React, { useEffect, useState } from "react";
import Field from "../Form/Input/Field";
import Submit from "../Form/Submit/Submit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSuccessEmployee } from "../../Redux/AlertReducer";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { SetRefetchEmployee, setShow } from "../../Redux/EmployeeReducer";

const EmployeeForm = () => {
  const update = useSelector((state) => state.Employee.update);
  const show = useSelector((state) => state.Employee.show);
  const Employee = useSelector((state) => state.Employee.data);
  const Refetch = useSelector((state) => state.Employee.Refetch);
  const [employeeType, setemployeeType] = useState(1);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    dispatch(setShow(false));

    if (update) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        user_type: employeeType,
      };
      console.log(data);
      const token = localStorage.getItem("token");
      axios
        .put(`${window.host}/Admin/Employee/${Employee.id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          event.target.reset();
          console.log(response.data);
          dispatch(setSuccessEmployee(true));
          dispatch(SetRefetchEmployee(Refetch + 1));
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        user_type: employeeType,
        branch_id: localStorage.getItem("branch_id"),
      };
      console.log(data);
      const token = localStorage.getItem("token");
      axios
        .post(`${window.host}/Admin/Employee`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          event.target.reset();
          console.log(response.data);
          dispatch(setSuccessEmployee(true));
          dispatch(SetRefetchEmployee(Refetch + 1));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    setName(Employee.name);
    setEmail(Employee.email);
    setemployeeType(Employee.user_type);
  }, [show]);

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Field
        label="Name"
        placeholder="Employee Name"
        name="name"
        value={name}
        onChange={handleChangeName}
      />
      <Field
        label="Email"
        placeholder="Employee Email "
        name="email"
        type="email"
        value={email}
        onChange={handleChangeEmail}
      />
      <InputLabel className="text-start mb-1" id="demo-simple-select-label">
        Type
      </InputLabel>
      <Select
        className="w-full mb-2 h-[calc(1.5em + .75rem + 2px)] text-start"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Category"
        value={employeeType}
        onChange={(event) => setemployeeType(event.target.value)}
      >
        <MenuItem key="2" value="2">
          chef
        </MenuItem>
        <MenuItem key="1" value="1">
          waiter
        </MenuItem>
      </Select>
      <Submit />
    </form>
  );
};

export default EmployeeForm;
