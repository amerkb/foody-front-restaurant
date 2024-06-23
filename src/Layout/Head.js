import React from "react";
import IconToggle from "../UI/Header/IconToggle";
import { useSelector } from "react-redux";
import Search from "../UI/Header/Search";
import Profie from "../UI/Header/Profie";

const Head = () => {
  const toggle = useSelector((state) => state.Sidebar.toggle);
  return (
    <nav
      className={`bg-[#fff] pr-[30px] flex items-center justify-between h-[4.5rem] duration-500 ${
        toggle ? " max-md:pl-[255px]  pl-[285px]" : "pl-[30px]"
      }`}
    >
      <IconToggle />
        <Profie />
    </nav>
  );
};

export default Head;
