import { Box, Typography, useTheme } from "@mui/material";
import ShortTaleContainerBackgroundBox from "./ShortTaleContainerBackbroundBox";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import TaleButtonsContainer from "./TaleButtonsContainer";

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
          top: { xs: "50vh", lg: "40vh" },
          right: "80px",
          maxWidth: { md: "40%", lg: "45%" },
        }}
      >
        <Typography variant="h1" color={theme.palette.common.black}>
          {taleData!.topic}
        </Typography>
        <Typography my={5} variant="body1" color={theme.palette.common.black}>
          {taleData!.content}
        </Typography>
        <TaleButtonsContainer />
      </Box>
    </Box>
  );
};

export default ShortTaleContainer;
