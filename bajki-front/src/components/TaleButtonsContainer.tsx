import { Box, Button } from "@mui/material";

const TaleButtonsContainer = () => {
  return (
    <Box
      position="sticky"
      bottom="0"
      bgcolor="#fff"
      width="100%"
      mr={10}
      display="flex"
      justifyContent="space-between"
      p={3}
      borderRadius="48px 48px 0 0"
      border="1px solid #000"
      borderBottom="none"
    >
      {/* TODO: onclick */}
      <Button sx={{ flexGrow: "1", mr: 8 }} variant="outlined">
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
