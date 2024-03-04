import { Box } from "@mui/material";
import React from "react";

interface LogoBoxProps {
  logoType: "title" | "noTitle";
}

const LogoBox = ({ logoType }: LogoBoxProps) => {
  return (
    <Box
      component="img"
      maxWidth='500px'
      sx={{
        height: {xs: '137px', md: '300px'},
        width: {xs: '75%', md: '100%'}
      }}
      alt="Logo with title"
      src={require(`../images/logo${logoType}.png`)}
    />
  );
};

export default React.memo(LogoBox);
