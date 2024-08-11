import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../UI/Loader/Loader";
import Meal from "../../UI/Meal/Meal";
import Breadcrumb from "../../UI/Breadcrumb";
import DeletePops from "../../UI/Pops/DeletePops";
import SuccessAlert from "../../UI/Alert/SuccessAlert";
import { useSelector } from "react-redux";

const Meals = () => {
  const [loading, setLoader] = useState(true);
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");
  const branch_id = localStorage.getItem("branch_id");
  const Refetch = useSelector((state) => state.Meal.Refetch);
  useEffect(() => {
    axios
      .get(`${window.host}/Admin/product?branch_id=${branch_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setProducts(response.data.data);
        setLoader(false);
      })
      .catch((error) => {
        console.error(error);
        setLoader(false);
      });
  }, [Refetch]);

  return (
    <div className=" ">
      <DeletePops />
      <Breadcrumb title="Meals" />
      <SuccessAlert type='product'/>
      <div className="w-full  min-h-[calc(100vh-15.5rem)] relative h-full grid gap-8 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
        {loading ? <Loader bg="bg-[#f0f0fa]" /> : ""}

        {products.map((data) => (
          <Meal data={data} />
        ))}
      </div>
    </div>
  );
};

export default Meals;
