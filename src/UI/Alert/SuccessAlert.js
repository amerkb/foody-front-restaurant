import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSuccessCategory,
  setSuccessEmployee,
  setSuccessMeal,
  setSuccessTable,
} from "../../Redux/AlertReducer";
const SuccessAlert = ({ type }) => {
  const SuccessCategory = useSelector((state) => state.Alert.SuccessCategory);
  const SuccessMeal = useSelector((state) => state.Alert.SuccessMeal);
  const SuccessTable = useSelector((state) => state.Alert.SuccessTable);
  const SuccessEmployee = useSelector((state) => state.Alert.SuccessEmployee);
  const dispatch = useDispatch();

  useEffect(() => {
    if (SuccessCategory) {
      const timer = setTimeout(() => {
        dispatch(setSuccessCategory(false));
      }, 2500);

      return () => clearTimeout(timer);
    }
    if (SuccessMeal) {
      const timer = setTimeout(() => {
        dispatch(setSuccessMeal(false));
      }, 2500);

      return () => clearTimeout(timer);
    }
    if (SuccessTable) {
      const timer = setTimeout(() => {
        dispatch(setSuccessTable(false));
      }, 2500);

      return () => clearTimeout(timer);
    }
    if (SuccessEmployee) {
      const timer = setTimeout(() => {
        dispatch(setSuccessEmployee(false));
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [SuccessCategory, SuccessMeal, SuccessTable, SuccessEmployee]);

  return (
    <div
      className={`${
        (type === "category" && SuccessCategory) ||
        (type === "employee" && SuccessEmployee) ||
        (type === "table" && SuccessTable) ||
        (type === "product" && SuccessMeal)
          ? "opacity-100 h-[50px] "
          : "opacity-0 h-0 "
      }bg-[#e0ffef] duration-500 mb-4 rounded-[0.25rem] text-start text-[#07be6e] py-3 px-5 border-[1px]`}
    >
      <span className="font-bold">Well done!</span> You did the operation
      successfully.
    </div>
  );
};

export default SuccessAlert;
