import React from 'react'
import { useSelector } from "react-redux";

const Container = ({ content }) => {
    const toggle = useSelector((state) => state.Sidebar.toggle);

    return (
      <div className={` pr-[30px] duration-300 bg-[#f0f0fa] min-h-[calc(100vh-4.5rem)] ${toggle?" max-md:pl-[30px] pl-[285px]":"pl-[30px]"}`}>
        {content}
      </div>
    );
  };
  export default Container
