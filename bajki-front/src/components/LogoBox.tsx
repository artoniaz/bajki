import { Box } from "@mui/material";
import React from "react";

interface LogoBoxProps {
  logoType: "title" | "noTitle";
  width: number;
  height: number;
}

const LogoBox = ({ logoType, width, height }: LogoBoxProps) => {
  return (
    <Box
      component="img"
      width={`${width}px`}
      height={`${height}px`}
      alt="Logo with title"
      src={require(`../images/logo${logoType}.png`)}
    />
  );
};

export default React.memo(LogoBox);
