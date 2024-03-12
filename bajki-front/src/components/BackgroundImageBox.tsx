import { Box } from "@mui/material";
import { isMobile } from "react-device-detect";

const BackgroundImageBox = () => {
  return (
    <Box
      component="img"
      sx={{
        position: isMobile ? 'fixed': 'absolute',
        width: "100%",
        maxWidth: "3400px",
        height: "100vh",
        margin: "auto",
        objectFit: 'cover',
      }}
      alt="Children reading, having fun."
      src={require("../images/coverImg.png")}
    />
  );
};

export default BackgroundImageBox;
