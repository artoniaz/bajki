import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import taleActions from "../talesActions";
import { Box, Typography } from "@mui/material";
import TalesContainer from "../../../components/TalesContainer";

const TalesFeed = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(taleActions.getTalesByUser());
  }, []);

  return (
    <Box>
      <Typography
        mb={3}
        color="secondary.main"
        variant="h2"
        sx={{
          mt: { xs: 8, md: 2 },
        }}
      >
        Moje bajki
      </Typography>
      <TalesContainer />
    </Box>
  );
};

export default TalesFeed;
