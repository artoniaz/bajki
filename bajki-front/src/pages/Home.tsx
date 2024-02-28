import { Grid } from "@mui/material";
import LogoBox from "../components/LogoBox";
import HomePageInfoBox from "../components/HomePageInfoBox";
import BackgroundImageBox from "../components/BackgroundImageBox";
import { Outlet } from "react-router-dom";
import ShortTaleContainer from "../components/ShortTaleContainer";
import { useAppSelector } from "../hooks/reduxHooks";
import { Status } from "../utils/stateStatus";

const Home = () => {
  const { status: createTaleStatus } = useAppSelector(
    (state) => state.createTale
  );

  return (
    <Grid container position="relative">
      <BackgroundImageBox />
      {createTaleStatus === Status.Success && <ShortTaleContainer />}
      <Grid container zIndex={2} p={10} height="100vh">
        <Grid
          item
          md={5}
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          height="100%"
        >
          <LogoBox logoType="title" width={'100%'} height={'300px'} />
          <HomePageInfoBox />
        </Grid>
        <Grid item md={3} />
        <Grid
          item
          md={4}
          display="flex"
          alignItems="flex-end"
          justifyContent="flex-end"
        >
          <Outlet />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
