import { Box, Button } from "@mui/material";
import { isMobile } from "react-device-detect";
import { useAppDispatch } from "../hooks/reduxHooks";
import { reset } from "../features/tales/createTale/createTaleSlice";

const TaleButtonsContainer = () => {
  const dispatch = useAppDispatch();

  const handleCreateNewTale = () => {
    dispatch(reset());
  };

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
      <Button
        onClick={handleCreateNewTale}
        sx={{ flexGrow: "1", mr: isMobile ? 2 : 8 }}
        variant="outlined"
      >
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
