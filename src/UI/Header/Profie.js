import React, { useState } from "react";
import { CiLogout } from "react-icons/ci";
import { SlOptionsVertical } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Profie = () => {
  const [open, Setopen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="relative links" onClick={() => Setopen(!open)}>
      <img
        className="w-[50px] h-[50px] rounded-full  "
        src="profile.png"
      />

      <ul className={` ul ${open ? "block" : "hidden"}`}>
        <li className="  " onClick={() => handleLogout()}>
          <span className="pr-0 py-[15px]  pl-[25px] flex hover:text-[#ff6877] duration-300  items-center">
            <CiLogout className="text-[16px] mr-[20px]" />
            Logout
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profie;
