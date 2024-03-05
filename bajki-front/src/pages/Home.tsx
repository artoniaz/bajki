import { Button, Grid } from "@mui/material";
import LogoBox from "../components/LogoBox";
import HomePageInfoBox from "../components/HomePageInfoBox";
import { Outlet } from "react-router-dom";
import ShortTaleContainer from "../components/ShortTaleContainer";
import { useAppSelector } from "../hooks/reduxHooks";
import { Status } from "../utils/stateStatus";
import { useRef } from "react";

const Home = () => {
  const { status: createTaleStatus } = useAppSelector(
    (state) => state.createTale
  );

  const ref = useRef<null | HTMLDivElement>(null);

  const handleCreateTaleBtn = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {createTaleStatus === Status.Success && <ShortTaleContainer />}
      <Grid
        item
        xs={12}
        md={5}
        display="flex"
        flexDirection="column"
        sx={{
          justifyContent: { xs: "center", md: "flex-end" },
          height: { xs: "100vh", md: "auto" },
        }}
      >
        <LogoBox logoType="title" size="big" />
        <HomePageInfoBox />
        <Button
          sx={{
            display: { sx: "block", md: "none" },
            mt: 4,
          }}
          variant="contained"
          onClick={handleCreateTaleBtn}
        >
          Stwórz bajkę
        </Button>
      </Grid>
      <Grid item sx={{ display: { xs: "none", md: "block" } }} md={3} />
      <Grid
        item
        sx={{ display: { xs: "none", md: "flex" } }}
        md={4}
        alignItems="flex-end"
      >
        <Outlet />
      </Grid>
      <Grid
        item
        sx={{ display: { xs: "block", md: "none" } }}
        xs={12}
        ref={ref}
        height="100vh"
      >
        <Outlet />
      </Grid>
    </>
  );
};

export default Home;
