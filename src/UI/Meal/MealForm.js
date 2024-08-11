import React, { useEffect, useState } from "react";
import Field from "../Form/Input/Field";
import TextArea from "../Form/Input/TextArea";
import Submit from "../Form/Submit/Submit";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from "@mui/material";
import { setSuccessMeal } from "../../Redux/AlertReducer";
const MealForm = () => {
  const { id } = useParams();
  const [Categories, setCategories] = useState([]);
  const token = localStorage.getItem("token");
  const branch_id = localStorage.getItem("branch_id");
  const navigate = useNavigate();
  const [data, setData] = useState({
    category_id: 0,
    estimated_time: dayjs("2022-04-17T00:15"),
  });
  const [loading, setLoader] = useState(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`${window.host}/Admin/product/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data.data);
          setData(response.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setData({
        estimated_time: dayjs("2022-04-17T00:15"),
        name: "",
        description: "",
        price: "",
        active:1
      });
    }

    axios
      .get(`${window.host}/Admin/category?branch_id=${branch_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setCategories(response.data.data);
        setLoader(false);
      })
      .catch((error) => {
        console.error(error);
        setLoader(false);
      });
  }, [id]);

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();
    if (data.image) {
      console.log(data);
      formData.append("image", data.image);
    }
    const time = dayjs(data.estimated_time, "HH:mm:ss", true);
    const formattedTime = time.format("HH:mm:ss");
    formData.append("name", data.name);
    formData.append("active", data.active?1:0);
    formData.append("price", data.price);
    formData.append("estimated_time", formattedTime);
    formData.append("price", data.price);
    formData.append("category_id", data.category_id);
    formData.append("description", data.description);
    formData.append("branch_id", branch_id);
    if (id) {
      axios
        .post(`${window.host}/Admin/product/${id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          navigate("/Meals");
          dispatch(setSuccessMeal(true));
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .post(`${window.host}/Admin/product`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          navigate("/Meals");
          dispatch(setSuccessMeal(true));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleDataChange = (type, newData) => {
    setData({ ...data, [type]: newData });
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col gap-y-[10px]"
    >
      {loading ? <Loader /> : ""}
      <div className="flex max-md:flex-col">
        <Field
          label="name"
          value={data.name}
          onChange={(event) => handleDataChange("name", event.target.value)}
          placeholder="Meal Name"
          name="name"
        />
        <Field
          label="Price"
          placeholder="Meal price"
          type="number"
          name="price"
          value={data.price}
          onChange={(event) => handleDataChange("price", event.target.value)}
        />
      </div>
      <div className="flex max-md:flex-col max-md:gap-y-10 gap-x-[10px]">
        <FormControl fullWidth style={{ height: "100%" }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            value={data.category_id}
            onChange={(event) =>
              handleDataChange("category_id", event.target.value)
            }
          >
            {Categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          style={{ height: "100%" }}
        >
          <TimeField
            label="estimated time"
            onChange={(newTime) => {
              handleDataChange("estimated_time", newTime);
            }}
            value={dayjs(data.estimated_time, "HH:mm:ss", true)}
            format="HH:mm:ss"
          />
        </LocalizationProvider>
      </div>
      <div className="flex  items-center ">
        <Field
          label="image"
          onChange={(event) => {
            const file = event.target.files[0];
            handleDataChange("image", file);
          }}
          type="file"
          required={false}
          name="image"
        />
        <div className=" flex-1">
          <p class="medium"> Active</p>
          <Switch
            checked={data.active}
            onChange={(event) =>
              handleDataChange("active", event.target.checked)
            }
            color="warning"
          />
        </div>
      </div>
      <TextArea
        label="Description"
        placeholder="Restaurant Description"
        name="description"
        value={data.description}
        onChange={(event) =>
          handleDataChange("description", event.target.value)
        }
      />

      <Submit />
    </form>
  );
};
export default MealForm;
