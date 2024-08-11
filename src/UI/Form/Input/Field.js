import React, { useState } from "react";

const Field = ({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  defaultValue,
  required=true
}) => {
  return (
    <div
      className={`px-[5px] mb-5 text-[rgb(73,80,87)] text-[14px] w-full flex  flex-col  ${
        type === "hidden" ? "hidden" : "visible"
      }`}
    >
      <label className="mb-2 text-start">{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        autoComplete="off"
        required={required}

        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className="border-[#0000001a] flex-1  duration-200 focus:border-[#80bdff] input-box
         border-[1px] h-[calc(1.5em + .75rem + 2px)] rounded-[0.25rem] py-[0.375rem] px-[0.75rem] outline-none"
      />
    </div>
  );
};

export default Field;
