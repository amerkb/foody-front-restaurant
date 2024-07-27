import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loader({ bg = 'bg-white' }) {
  return (
    <div className={`absolute z-30 top-0 bottom-0 right-0 left-0 ${bg} 
      flex items-center justify-center`}>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>
  );
}
