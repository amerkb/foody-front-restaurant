import React from "react";

const Update = ({ value = "Submit", onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        type="submit"
        className="bg-gray-700 text-center hover:bg-gray-900 duration-200  text-white font-semibold outline-none min-w-[80px]  px-3 py-2 text-[14px] rounded-[0.25rem] border-[1px] border-transparent"
      >
        {value}
      </button>
    </div>
  );
};

export default Update;
