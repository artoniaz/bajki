import { Box } from "@mui/material";

const ShortTaleContainerBackgroundBox = () => {
  return (
    <Box
      component="img"
      sx={{
        position: "absolute",
        bottom: 0,
        right: 0,
        zIndex: 2,
        width: "100%",
        maxWidth: "3400px",
        height: "auto",
        margin: "auto",
      }}
      src={require("../images/backgroundPage.png")}
    />
  );
};

export default ShortTaleContainerBackgroundBox;
