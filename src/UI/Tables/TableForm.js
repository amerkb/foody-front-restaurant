import React, { useEffect, useState } from "react";
import Field from "../Form/Input/Field";
import Submit from "../Form/Submit/Submit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSuccessTable } from "../../Redux/AlertReducer";
import { setShow } from "../../Redux/CategoryReducer";
import { SetRefetchTable } from "../../Redux/TableReducer";

const TableForm = () => {
  const update = useSelector((state) => state.Table.update);
  const show = useSelector((state) => state.Table.show);
  const table = useSelector((state) => state.Table.data);
  const Refetch = useSelector((state) => state.Table.Refetch);

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    dispatch(setShow(false));

    if (update) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = {
        table_num: formData.get("name"),
      };
      console.log(data);
      const token = localStorage.getItem("token");
      axios
        .put(`${window.host}/Admin/table/${table.id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          event.target.reset();
          console.log(response.data);
          dispatch(setSuccessTable(true));
          dispatch(SetRefetchTable(Refetch + 1));
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = {
        table_num: formData.get("name"),
        branch_id: localStorage.getItem("branch_id"),
      };
      console.log(data);
      const token = localStorage.getItem("token");
      axios
        .post(`${window.host}/Admin/table`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          event.target.reset();
          console.log(response.data);
          dispatch(setSuccessTable(true));
          dispatch(SetRefetchTable(Refetch + 1));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setValue(table.table_num);
  }, [show]);

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Field
        label="Name"
        placeholder="Table Name"
        name="name"
        value={value}
        onChange={handleChange}
      />

      <Submit />
    </form>
  );
};

export default TableForm;
