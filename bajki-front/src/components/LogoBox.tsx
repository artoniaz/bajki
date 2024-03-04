import { Box } from "@mui/material";
import React from "react";

interface LogoBoxProps {
  logoType: "title" | "noTitle";
  size: "small" | "big";
}

const LogoBox = ({ logoType, size }: LogoBoxProps) => {
  const height =
    size === "big" ? { xs: "137px", md: "300px" } : { xs: "37px", md: "67px" };
  const width =
    size === "big" ? { xs: "75%", md: "100%" } : { xs: "53px", md: "99px" };
  return (
    <Box
      component="img"
      maxWidth="500px"
      sx={{
        height: height,
        width: width,
      }}
      alt="Logo with title"
      src={require(`../images/logo${logoType}.png`)}
    />
  );
};

export default React.memo(LogoBox);
