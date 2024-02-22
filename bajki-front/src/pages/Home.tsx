import {  Grid } from "@mui/material";
import LogoBox from "../components/LogoBox";
import HomePageInfoBox from "../components/HomePageInfoBox";
import BackgroundImageBox from "../components/BackgroundImageBox";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Grid container>
      <BackgroundImageBox />
      <Grid container position="absolute" p={10} height="100vh">
        <Grid
          item
          md={6}
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          height="100%"
        >
          <LogoBox logoType="title" />
          <HomePageInfoBox />
        </Grid>
        <Grid
          item
          md={6}
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
