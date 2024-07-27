import React from "react";
import PanelHead from "../../UI/Panel/PanelHead";
import PanelBody from "../../UI/Panel/PanelBody";
import ContainerPop from "../../UI/Pops/ContainerPop";
import CategoriesForm from "../../UI/Category/CategoriesForm";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setShow } from "../../Redux/CategoryReducer";
const AddCategory = () => {
  const show = useSelector((state) => state.Category.show);
  const update = useSelector((state) => state.Category.update);
  const dispatch = useDispatch();
  return (
    <div className={`${show ? "visible" : "hidden"}`}>
      <ContainerPop>
        <div className="swals-show w-[32em] max-w-full">
          <div className="flex justify-center items-center ">
            <PanelHead
              Class="flex-1"
              title={`${update ? "Update" : "Add"} category`}
            />

            <PanelHead
              onClick={() => dispatch(setShow(false) )}
              title={<IoIosCloseCircleOutline className="text-[24px]" />}
            />
          </div>
          <PanelBody content={<CategoriesForm type="Add" />} />
        </div>
      </ContainerPop>
    </div>
  );
};

export default AddCategory;
