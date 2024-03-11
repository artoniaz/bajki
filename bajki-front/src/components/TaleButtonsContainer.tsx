import { Box, Button } from "@mui/material";
import { isMobile } from "react-device-detect";

const TaleButtonsContainer = () => {
  return (
    <Box
      position={isMobile ? "static" : "sticky"}
      bottom="0"
      bgcolor="#fff"
      width="100%"
      display="flex"
      justifyContent="space-between"
      p={isMobile ? 0 : 3}
      borderRadius="48px 48px 0 0"
      border={isMobile ? "none" : "1px solid #000"}
      borderBottom="none"
    >
      {/* TODO: onclick */}
      <Button sx={{ flexGrow: "1", mr: isMobile ? 2 : 8 }} variant="outlined">
        Stwórz nową
      </Button>
      {/* TODO: onclick */}
      <Button sx={{ flexGrow: "1" }} variant="contained">
        Kontynuuj bajkę
      </Button>
    </Box>
  );
};

export default TaleButtonsContainer;
