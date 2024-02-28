import { Box } from "@mui/material";
import React from "react";

interface LogoBoxProps {
  logoType: "title" | "noTitle";
  width: string;
  height: string;
}

const LogoBox = ({ logoType, width, height }: LogoBoxProps) => {
  return (
    <Box
      component="img"
      width={width}
      maxWidth='500px'
      height={height}
      alt="Logo with title"
      src={require(`../images/logo${logoType}.png`)}
    />
  );
};

export default React.memo(LogoBox);
