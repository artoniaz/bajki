import { Box, Typography } from "@mui/material";
import TaleModel from "../models/TaleModel";
import { forwardRef } from "react";

interface ShortTaleContainerMobileProps {
  tale: TaleModel;
}

const ShortTaleContainerMobile = forwardRef<
HTMLDivElement,
  ShortTaleContainerMobileProps
>(({ tale }, ref) => {
  //value of global app padding. If padding changes this has to be changed
  const translateXValue = "-16px";
  return (
    <Box position="relative" minHeight={"100vh"} ref={ref}>
      <Box
        position="absolute"
        top={0}
        component="img"
        zIndex={1}
        sx={{
          transform: `translate(${translateXValue}, 0)`,
          width: "120%",
        }}
        src={require("../images/taleContainerTop.png")}
      />
      <Box
        position="absolute"
        top={150}
        zIndex={2}
        sx={{
          transform: `translate(${translateXValue}, 0)`,
          width: "100vw",

          background: "#fff",
          color: "black",
        }}
      >
        <Box position="relative" px={2}>
          <Typography variant="h1" color="#000" mb={2}>
            {tale.topic}
          </Typography>
          <Typography variant="body1" color="#000">
            {tale.content}
          </Typography>
          <Box
            position="absolute"
            component="img"
            sx={{
              transform: `translate(${translateXValue}, 99%)`,
              bottom: 0,
              width: "120%",
              height: "200px",
            }}
            src={require("../images/taleContainerBottom.png")}
          />
        </Box>
      </Box>
    </Box>
  );
});

export default ShortTaleContainerMobile;
