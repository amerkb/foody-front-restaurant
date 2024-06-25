import React, { useEffect, useState } from "react";
import Field from "../Form/Input/Field";
import TextArea from "../Form/Input/TextArea";
import Submit from "../Form/Submit/Submit";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AlertReducer, { setSuccessRestaurant } from "../../Redux/AlertReducer";
import { useDispatch } from "react-redux";
import Loader from "../Loader/Loader";

const FormRestaurant = () => {
  const { id } = useParams();
  const [Restaurant, setRestaurant] = useState({});
  const token = localStorage.getItem("token");
  const update = id != null ? true : false;
  const [loading, setLoader] = useState(update);

  useEffect(() => {
    if (update) {
      axios
        .get(`${window.host}/superAdmin/restaurant/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data.data);
          setRestaurant(response.data.data);
          setLoader(false);
        })
        .catch((error) => {
          console.error(error);
          setLoader(false);
        });
    }
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    if (update) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        description: formData.get("description"),
      };
      console.log(data);
      const token = localStorage.getItem("token");
      axios
        .put(`${window.host}/superAdmin/restaurant/${id}`, data, {
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
    } else {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        description: formData.get("description"),
      };
      console.log(data);
      const token = localStorage.getItem("token");
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
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      {loading ? <Loader /> : ""}

      <Field
        label="Name"
        placeholder="Restaurant Name"
        name="name"
        value={Restaurant.name}
      />
      <Field
        label="Email"
        placeholder="Restaurant Email"
        type="email"
        name="email"
        value={Restaurant.email}
      />
      <TextArea
        label="Description"
        placeholder="Restaurant Description"
        name="description"
        value={Restaurant.description}
      />
      <Submit />
    </form>
  );
};

export default FormRestaurant;
