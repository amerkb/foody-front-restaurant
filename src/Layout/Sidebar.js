import React from "react";
import Logo from "../UI/Header/logo";
import ElementSidbar from "../UI/Sidebar/ElementSidbar";
import { MdDashboard } from "react-icons/md";
import ElementSidbarDropDawn from "../UI/Sidebar/ElementSidbarWithDropDawm";
import { useSelector } from "react-redux";
import { IoRestaurantSharp } from "react-icons/io5";

const Sidebar = () => {
  const toggle = useSelector((state) => state.Sidebar.toggle);
  return (
    <aside
      id="sidebar-multi-level-sidebar"
      class={`list-none p-0 bg-white z-50 shadow-lg  fixed top-0 left-0 duration-300
h-screen overflow-auto font-sans ${toggle ? "max-md:w-[225px] w-[255px]" : "w-[0px]"}`}
      aria-label="Sidebar"
    >
      <Logo />
      <ul class="list-none text-[14px]  text-[#000000de] ">
        <ElementSidbar title="Dashboard" icon={MdDashboard} />
        <ElementSidbarDropDawn title="Restaurant"  show='Restaurants' icon={IoRestaurantSharp} />
      </ul>
    </aside>
  );
};

export default Sidebar;
