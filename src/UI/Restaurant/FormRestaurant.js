import React from "react";
import Field from "../Form/Input/Field";
import TextArea from "../Form/Input/TextArea";
import Submit from "../Form/Submit/Submit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AlertReducer, { setSuccessRestaurant } from "../../Redux/AlertReducer";
import { useDispatch } from "react-redux";

const FormRestaurant = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      description: formData.get("description"),
    };
    console.log(data);
    const token =
      "6|laravel_sanctum_gRgHutprhJUktqFZpGYYCQzlJ2923G5z7iaN6Z4zc6821186";
    axios
      .post(`${window.host}/superAdmin/restaurant`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        navigate("/Restaurants");
        dispatch(setSuccessRestaurant(true));

      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <Field label="Name" placeholder="Restaurant Name" name="name" />
      <Field
        label="Email"
        placeholder="Restaurant Email"
        type="email"
        name="email"
      />
      <TextArea
        label="Description"
        placeholder="Restaurant Description"
        name="description"
      />
      <Submit />
    </form>
  );
};

export default FormRestaurant;
