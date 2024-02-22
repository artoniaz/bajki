import { Box } from "@mui/material";

const BackgroundImageBox = () => {
  return (
    <Box
      component="img"
      sx={{
        width: "100%",
        maxWidth: "3400px",
        height: "100vh",
        objectFit: "cover",
        margin: "auto",
      }}
      alt="Children reading, having fun."
      src={require("../images/coverImg.png")}
    />
  );
};

export default BackgroundImageBox;
