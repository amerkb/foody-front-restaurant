import React, { useEffect, useState } from "react";
import Field from "../Form/Input/Field";
import Submit from "../Form/Submit/Submit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SetRefetch, setShow } from "../../Redux/CategoryReducer";
import { setSuccessCategory } from "../../Redux/AlertReducer";

const CategoriesForm = () => {
  const update = useSelector((state) => state.Category.update);
  const show = useSelector((state) => state.Category.show);
  const category = useSelector((state) => state.Category.data);
  const Refetch = useSelector((state) => state.Category.Refetch);

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    dispatch(setShow(false));

    if (update) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = {
        name: formData.get("name"),
      };
      console.log(data);
      const token = localStorage.getItem("token");
      axios
        .put(`${window.host}/Admin/category/${category.id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          event.target.reset();
          console.log(response.data);
          dispatch(setSuccessCategory(true));
          dispatch(SetRefetch(Refetch + 1));
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = {
        name: formData.get("name"),
        branch_id: localStorage.getItem("branch_id"),
      };
      console.log(data);
      const token = localStorage.getItem("token");
      axios
        .post(`${window.host}/Admin/category`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          event.target.reset();
          console.log(response.data);
          dispatch(setSuccessCategory(true));
          dispatch(SetRefetch(Refetch + 1));
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
    setValue(category.name);
  }, [show]);

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Field
        label="Name"
        placeholder="Category Name"
        name="name"
        value={value}
        onChange={handleChange}
      />

      <Submit />
    </form>
  );
};

export default CategoriesForm;
