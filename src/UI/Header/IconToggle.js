import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SetElementSidebarReducer, {
  setTOGGLE,
} from "../../Redux/SidebarReducer";
const IconToggle = () => {
  const toggle = useSelector((state) => state.Sidebar.toggle);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setTOGGLE(!toggle));
  };
  return (
    <div className="w-[22px] " onClick={handleClick}>
      <div className="w-full h-[2px] mb-[4px] bg-[#ff6877]"></div>
      <div
        className={`h-[2px] mb-[4px] bg-[#ff6877] duration-300 ${
          toggle ? "w-3/4" : "w-full"
        }`}
      ></div>
      <div
        className={`h-[2px] mb-[4px] bg-[#ff6877] duration-300 ${
          toggle ? "w-1/2" : "w-full"
        }`}
      ></div>
    </div>
  );
};

export default IconToggle;
