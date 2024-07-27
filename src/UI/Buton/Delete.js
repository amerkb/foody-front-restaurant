import React from "react";

const Delete = ({ value = "Submit" ,onClick}) => {
  return (
    <div>
      <button
      onClick={onClick}
        type="submit"
        className="bg-red-500 center hover:bg-red-700 duration-200  text-white font-semibold outline-none min-w-[80px]  px-3 py-2 text-[14px] rounded-[0.25rem] border-[1px] border-transparent"
      >
        {value}
      </button>
    </div>
  );
};

export default Delete;
