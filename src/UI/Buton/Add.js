import React from "react";

const Add = ({ value = "Submit", onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        type="submit"
        className="bg-[#28a745] text-center hover:bg-[#1c602d] duration-200  text-white font-semibold outline-none min-w-[80px]  px-3 py-2 text-[14px] rounded-[0.25rem] border-[1px] border-transparent"
      >
        {value}
      </button>
    </div>
  );
};

export default Add;
