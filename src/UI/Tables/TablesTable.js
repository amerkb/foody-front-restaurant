import React, { useEffect, useState } from "react";
import TableRow from "../Table/TableRow";
import TableHead from "../Table/TableHead";
import TableData from "../Table/TableData";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import Loader from "../Loader/Loader";
import { FaDownload } from "react-icons/fa";
import DeletePops from "../Pops/DeletePops";
import { useDispatch, useSelector } from "react-redux";
import Switch from "@mui/material/Switch";
import DeleteReducer, {
  setValueConfirm,
  setId,
} from "../../Redux/DeleteReducer";

import AddTable from "../../Page/Table/AddTable";
import {  setSuccessTable } from "../../Redux/AlertReducer";
import { setData, SetRefetchTable, setShow, setUpdate } from "../../Redux/TableReducer";

const TablesTable = () => {
  const [Tables, setTables] = useState([]);
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
        `${window.host}/Admin/activetable/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        dispatch(setSuccessTable(true));
        dispatch(SetRefetchTable(Refetch + 1));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .get(`${window.host}/Admin/table?branch_id=${branch_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setTables(response.data.data);
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

  function handleOpenConfirm(table_id) {
    dispatch(setValueConfirm("table"));
    dispatch(setId(table_id));
  }
  function handleUpdateTable(table) {
    dispatch(setShow(true));
    dispatch(setUpdate(true));
    dispatch(setData(table));
  }
  function handleStoreCategory() {
    dispatch(setUpdate(false));
    dispatch(setShow(true));
    dispatch(setData({ name: "" }));
  }
  function downloadFile(id) {
    const timestamp = new Date().getTime();
    const url = `${window.host}/download/${id}?timestamp=${timestamp}`;

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text(); // Assuming the response is SVG content
      })
      .then((svgContent) => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const img = new Image();
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);

          canvas.toBlob((blob) => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `QR${id}.png`);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
          }, "image/png");
        };
        img.src =
          "data:image/svg+xml;base64," +
          btoa(unescape(encodeURIComponent(svgContent)));
      })
      .catch((error) => {
        console.error("There was an error downloading the file:", error);
      });
  }
  const handleDownload = (id) => {
    downloadFile(id);
  };
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
          Add Table
        </div>
      )}
      {loading ? <Loader /> : ""}
      <DeletePops />
      <AddTable />
      {loading ? (
        ""
      ) : (
        <table className="w-full text-[15px]  ">
          <thead className="bg-secondary text-white font-sans ">
            <tr>
              <TableHead title="Table ID" />
              <TableHead title="Table Name" />
              <TableHead title="Download QR" />
              <TableHead title="Active  /  Edit /  Delete" />
            </tr>
          </thead>
          <tbody>
            {Tables.map((Table) => (
              <TableRow key={Table.id}>
                <TableData title={Table.id} />
                <TableData title={Table.table_num} />
                <td>
                  <button
                    onClick={() => handleDownload(Table.id)}
                    className="inline-flex items-center justify-center gap-x-5  px-4 p-2  font-medium rounded-md 
                  shadow-sm text-white bg-green-500 hover:bg-green-700 "
                  >
                    <FaDownload />
                    Download
                  </button>
                </td>
                <td className="p-3 whitespace-nowrap text-center flex gap-x-10 items-center justify-center text-[18px]">
                  <Switch
                    onChange={(event) =>
                      handleSwitchChange(Table.id, event.target.checked)
                    }
                    checked={switchStates[Table.id]}
                    color="warning"
                  />

                  <FaPencilAlt
                    className="text-[#6c757d]"
                    onClick={() => handleUpdateTable(Table)}
                  />

                  <FaTrashAlt
                    onClick={() => handleOpenConfirm(Table.id)}
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

export default TablesTable;
