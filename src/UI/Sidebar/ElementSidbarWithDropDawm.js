import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import SetElementSidebarReducer, {
  setElement,
} from "../../Redux/SidebarReducer";
import { Link } from "react-router-dom";
const ElementSidbarDropDawn = (props) => {
  const { title, show, icon: IconComponent } = props;
  const elementActive = useSelector((state) => state.Sidebar.elementActive);
  const dispatch = useDispatch();
  const handleClick = () => {
    const value = title === elementActive ? "" : title;
    dispatch(setElement(value));
  };

  return (
    <li className=" ">
      <span
        onClick={handleClick}
        className="pr-0 py-[15px]  pl-[25px]  flex hover:text-[#ff6877] duration-300 relative  items-center"
      >
        {IconComponent && <IconComponent className={"text-[16px] mr-[20px]"} />}
        {show}
        <IoIosArrowForward
          className={`absolute right-3 duration-300 text-[16px]
        ${elementActive === title ? "rotate-90" : "rotate-0"}    `}
        />
      </span>
      <ul
        className={`list-none text-[14px] bg-[#ebebeb]  pl-[50px] duration-300 overflow-hidden font-bold text-[#000000de] ${
          elementActive === title ? "h-[6.4rem]" : "h-0"
        } `}
      >
        <Link to={`/Add${title}`} color="inherit" underline="none">
          <li className="pr-0 py-[15px]  pl-[25px] text-center block border-b-2 ">
            <span className="hover:text-[#ff6877] duration-100 flex text-[14px]  items-center">
              Add {title}
            </span>
          </li>
        </Link>
        <Link to={`/${show}`} color="inherit" underline="none">
          <li className="pr-0 py-[15px]  pl-[25px] text-center  block    ">
            <span className="hover:text-[#ff6877] duration-100 flex text-[14px] items-center">
              {show} List
            </span>
          </li>
        </Link>
      </ul>
    </li>
  );
};

export default ElementSidbarDropDawn;
