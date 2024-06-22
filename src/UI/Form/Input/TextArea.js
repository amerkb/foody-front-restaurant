import React from "react";

const TextArea = ({ label, placeholder }) => {
  return (
    <div className="px-[5px] mb-6 text-[rgb(73,80,87)] text-[14px]  grid col-span-full">
      <label className="mb-2 text-start">{label}</label>
      <textarea
        placeholder={placeholder}
        className="border-[#0000001a] flex-grow flex-shrink h-32  border-[1px]  rounded-[0.25rem] py-[0.375rem] px-[0.75rem]  outline-none"
      ></textarea>
    </div>
  );
};

export default TextArea;
