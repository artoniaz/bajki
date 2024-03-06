import { Box, Button, Typography, useTheme } from "@mui/material";
import ShortTaleContainerBackgroundBox from "./ShortTaleContainerBackbroundBox";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

const ShortTaleContainer = () => {
  const { data: taleData } = useAppSelector((state) => state.createTale);
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const handleCreateNewTale = () => {};
  return (
    <Box>
      <ShortTaleContainerBackgroundBox />
      <Box
        sx={{
          position: "absolute",
          zIndex: 3,
          bottom: "80px",
          right: "80px",
          maxWidth: { md: "30%", lg: "50%" },
        }}
      >
        <Typography variant="h1" color={theme.palette.common.black}>
          {taleData!.topic}
        </Typography>
        <Typography my={5} variant="body1" color={theme.palette.common.black}>
          {taleData!.content} 
        </Typography>
        <Box display="flex" justifyContent="space-between">
          {/* TODO: onclick */}
          <Button sx={{ flexGrow: "1" }} variant="outlined">
            Stwórz nową
          </Button>
          <Box mx={4} />
          {/* TODO: onclick */}
          <Button sx={{ flexGrow: "1" }} variant="contained">
            Kontynuuj bajkę
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ShortTaleContainer;
