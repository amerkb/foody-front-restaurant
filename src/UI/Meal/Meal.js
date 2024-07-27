import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Add from "../Buton/Add";
import Update from "../Buton/Update";
import Delete from "../Buton/Delete";
import LazyLoad from "react-lazyload";
import { setId, setValueConfirm } from "../../Redux/DeleteReducer";
import { Link } from "react-router-dom";

const Meal = ({ data }) => {
  const dispatch = useDispatch();
  function handleOpenConfirm(meal_id) {
    dispatch(setValueConfirm("product"));
    dispatch(setId(meal_id));
  }
  return (
    <div className="text-left  bg-white pb-[20px]  rounded-[5px] mb-8 boxfood">
      <div class="ms-card-img">
        <LazyLoad>
          <img className="w-full" src={data.img} alt="card_img" />
        </LazyLoad>
      </div>
      <div class="ms-card-body" className="p-4 text-[14px] font-bold">
        <div
          class="new"
          className="flex justify-between text-[16px] whitespace-nowrap mb-[18px] items-center "
        >
          <h6 class="mb-0 ">{data.name} </h6>
          <h6 class="ms-text-primary text-secondary  mb-0">${data.price}</h6>
        </div>
        <div
          class="new"
          className="flex justify-between text-[16px] whitespace-nowrap mb-[15px] items-center "
        >
          <h6 class="mb-0 text-[#878793]">
            estimated time: {data.estimated_time}
          </h6>
          <span
            className={`badge text-white ${
              data.active ? "bg-[#28a745]" : "bg-[#ff6877]"
            }`}
          >
            {data.active ? "active" : "inactive"}
          </span>
        </div>
        <div
          class="new"
          className="flex justify-between text-[16px] whitespace-nowrap mb-[15px] items-center "
        >
          <h6 class="mb-0 text-[#878793]">category : {data.category}</h6>
        </div>
        <p className="text-[#878793] mb-[15px] ">{data.description}</p>
        <div className="flex justify-between items-center">
          <Delete value="remove" onClick={() => handleOpenConfirm(data.id)} />
            
          <Link to={`/updateMeal/${data.id}`} color="inherit" underline="none">
          <Update value="edit" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Meal;
