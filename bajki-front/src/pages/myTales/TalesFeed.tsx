import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import taleActions from "../../features/tales/getTales/talesActions";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import TalesContainer from "../../components/TalesContainer";

const TalesFeed = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(taleActions.getTalesByUser());
  }, []);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "90vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4">Moje bajki</Typography>
        <TalesContainer />
      </Box>
    </Stack>
  );
};

export default TalesFeed;
