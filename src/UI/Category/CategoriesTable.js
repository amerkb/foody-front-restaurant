import React, { useEffect, useState } from "react";
import TableRow from "../Table/TableRow";
import TableHead from "../Table/TableHead";
import TableData from "../Table/TableData";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import DeletePops from "../Pops/DeletePops";
import { useDispatch, useSelector } from "react-redux";
import Switch from "@mui/material/Switch";
import DeleteReducer, {
  setValueConfirm,
  setId,
} from "../../Redux/DeleteReducer";
import {
  setData,
  SetRefetch,
  setShow,
  setUpdate,
} from "../../Redux/CategoryReducer";
import AddCategory from "../../Page/Category/AddCategory";
import { setSuccessCategory } from "../../Redux/AlertReducer";
import { SecurityUpdateTwoTone } from "@mui/icons-material";

const CategoriesTable = () => {
  const [Categories, setCategories] = useState([]);
  const [switchStates, setSwitchStates] = useState({});
  const Refetch = useSelector((state) => state.Category.Refetch);
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
        `${window.host}/Admin/activecategory/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        dispatch(setSuccessCategory(true));
        dispatch(SetRefetch(Refetch + 1));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .get(`${window.host}/Admin/category?branch_id=${branch_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setCategories(response.data.data);
        setSwitchStates(
          response.data.data.reduce((acc, category) => {
            acc[category.id] = category.active;
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

  function handleOpenConfirm(category_id) {
    dispatch(setValueConfirm("category"));
    dispatch(setId(category_id));
  }
  function handleUpdateCategory(category) {
    dispatch(setShow(true));
    dispatch(setUpdate(true));
    dispatch(setData(category));
  }
  function handleStoreCategory() {
    dispatch(setUpdate(false));
    dispatch(setShow(true));
    dispatch(setData({name:""}));

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
          onClick={() => handleStoreCategory()}
          className="bg-secondary text-center hover:bg-[#bc2634] duration-200 mb-4 text-white font-bold float-right
       w-fit  px-4 py-[0.625rem] text-[14px] rounded-[0.25rem] border-[1px] border-transparent"
        >
          Add Category
        </div>
      )}
      {loading ? <Loader /> : ""}
      <DeletePops />
      <AddCategory />
      {loading ? (
        ""
      ) : (
        <table className="w-full text-[15px]  ">
          <thead className="bg-secondary text-white font-sans ">
            <tr>
              <TableHead title="Category ID" />
              <TableHead title="Category Name" />
              <TableHead title="Created Date" />
              <TableHead title="Active  /  Edit /  Delete" />
            </tr>
          </thead>
          <tbody>
            {Categories.map((Category) => (
              <TableRow key={Category.id}>
                <TableData title={Category.id} />
                <TableData title={Category.name} />
                <TableData title={Category.created_at} />
                <td className="p-3 whitespace-nowrap text-center flex gap-x-10 items-center justify-center text-[18px]">
                  <Switch
                    onChange={(event) =>
                      handleSwitchChange(Category.id, event.target.checked)
                    }
                    checked={switchStates[Category.id]}
                    color="warning"
                  />

                  <FaPencilAlt
                    className="text-[#6c757d]"
                    onClick={() => handleUpdateCategory(Category)}
                  />

                  <FaTrashAlt
                    onClick={() => handleOpenConfirm(Category.id)}
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

export default CategoriesTable;
