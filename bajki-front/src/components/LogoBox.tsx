import { Box } from "@mui/material";
import React from "react";

interface LogoBoxProps {
  logoType: "title" | "noTitle";
}

const LogoBox = ({ logoType }: LogoBoxProps) => {
  return (
    <Box
      component="img"
      width="440px"
      height="300px"
      alt="Logo with title"
      src={require(`../images/logo${logoType}.png`)}
    />
  );
};

export default React.memo(LogoBox);
