import React from "react";

const Field = ({ label, type = "text", placeholder }) => {
  return (
    <div className="px-[5px] mb-6 text-[rgb(73,80,87)] text-[14px]  grid col-span-full">
      <label className="mb-2 text-start">{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        className="border-[#0000001a] flex-grow flex-shrink  border-[1px] h-[calc(1.5em + .75rem + 2px)] rounded-[0.25rem] py-[0.375rem] px-[0.75rem] outline-none"
      />
    </div>
  );
};

export default Field;
