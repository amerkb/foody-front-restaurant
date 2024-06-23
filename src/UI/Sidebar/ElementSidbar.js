import React from "react";
import Link from "@mui/material/Link";

const ElementSidbar = (props) => {
  const { title, icon: IconComponent } = props;

  return (
    <Link href={`/${title}`} color="inherit" underline="none">
      <li className="  ">
        <span className="pr-0 py-[15px]  pl-[25px] flex hover:text-[#ff6877] duration-300  items-center">
          {IconComponent && <IconComponent className="text-[16px] mr-[20px]" />}
          {title}
        </span>
      </li>
    </Link>
  );
};

export default ElementSidbar;
