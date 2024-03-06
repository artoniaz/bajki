import { Box } from "@mui/material";

const BackgroundImageBox = () => {
  return (
    <Box
      component="img"
      sx={{
        position: 'fixed',
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
