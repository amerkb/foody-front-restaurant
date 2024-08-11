import React from "react";
import PanelHead from "../../UI/Panel/PanelHead";
import PanelBody from "../../UI/Panel/PanelBody";
import ContainerPop from "../../UI/Pops/ContainerPop";
import EmployeeForm from "../../UI/Employee/EmployeeForm";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setShow } from "../../Redux/TableReducer";
const AddEmployee = () => {
  const show = useSelector((state) => state.Table.show);
  const update = useSelector((state) => state.Table.update);
  const dispatch = useDispatch();
  return (
    <div className={`${show ? "visible" : "hidden"}`}>
      <ContainerPop>
        <div className="swals-show w-[32em] max-w-full">
          <div className="flex justify-center items-center ">
            <PanelHead
              Class="flex-1"
              title={`${update ? "Update" : "Add"} Employee`}
            />

            <PanelHead
              onClick={() => dispatch(setShow(false) )}
              title={<IoIosCloseCircleOutline className="text-[24px]" />}
            />
          </div>
          <PanelBody content={<EmployeeForm type="Add" />} />
        </div>
      </ContainerPop>
    </div>
  );
};

export default AddEmployee;
