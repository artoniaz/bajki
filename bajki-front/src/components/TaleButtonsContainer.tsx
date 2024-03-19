import { Box, Button } from "@mui/material";
import { isMobile } from "react-device-detect";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { reset } from "../features/tales/createTale/createTaleSlice";
import { NavLink } from "react-router-dom";

const TaleButtonsContainer = () => {
  const dispatch = useAppDispatch();
  const { _id: taleId } = useAppSelector((state) => state.createTale.data!);

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
    >
      <Button
        onClick={handleCreateNewTale}
        sx={{ flexGrow: "1", mr: isMobile ? 2 : 8 }}
        variant="outlined"
      >
        Stwórz nową
      </Button>
      <Button
        sx={{ flexGrow: "1", textAlign: "center" }}
        variant="contained"
        component={NavLink}
        to={`/tale/${taleId}`}
      >
        Kontynuuj bajkę
      </Button>
    </Box>
  );
};

export default TaleButtonsContainer;
