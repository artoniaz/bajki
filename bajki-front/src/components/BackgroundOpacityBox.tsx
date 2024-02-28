import { Box } from "@mui/material";

const BackgroundOpacityBox = () => {
  return (
    <Box
      width="100%"
      height="100%"
      sx={{
        position: "fixed",
        background: "white",
        opacity: 0.8,
      }}
    />
  );
};

export default BackgroundOpacityBox;
