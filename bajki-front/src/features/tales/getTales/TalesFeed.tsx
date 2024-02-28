import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import taleActions from "../talesActions";
import { Grid, Typography } from "@mui/material";
import TalesContainer from "../../../components/TalesContainer";
import BackgroundImageBox from "../../../components/BackgroundImageBox";
import BackgroundOpacityBox from "../../../components/BackgroundOpacityBox";
import MainContainer from "../../../components/MainContainer";

const TalesFeed = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(taleActions.getTalesByUser());
  }, []);

  return (
    <Grid container position="relative">
      <BackgroundImageBox />
      <BackgroundOpacityBox />
      <MainContainer>
        <Typography mt={2} mb={3} color="secondary.main" variant="h2">
          Moje bajki
        </Typography>
        <TalesContainer />
      </MainContainer>
    </Grid>
  );
};

export default TalesFeed;
