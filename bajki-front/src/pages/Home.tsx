import { Button, Grid } from "@mui/material";
import LogoBox from "../components/LogoBox";
import HomePageInfoBox from "../components/HomePageInfoBox";
import { Outlet } from "react-router-dom";
import ShortTaleContainer from "../components/ShortTaleContainer";
import { useAppSelector } from "../hooks/reduxHooks";
import { Status } from "../utils/stateStatus";
import { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import ShortTaleContainerMobile from "../components/ShortTaleContainerMobile";
import FullScreenLoading from "../components/FullScreenLoading";

const Home = () => {
  const { status: createTaleStatus, data: tale } = useAppSelector(
    (state) => state.createTale
  );

  const createTaleFormRef = useRef<null | HTMLDivElement>(null);
  const mobileTaleContainerRef = useRef<null | HTMLDivElement>(null);

  const handleCreateTaleBtn = () => {
    const element = createTaleFormRef.current;
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (createTaleStatus === Status.Success) {
      setTimeout(() => {
        mobileTaleContainerRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 10);
    }
  }, [createTaleStatus]);

  return (
    <>
      {createTaleStatus === Status.Success && !isMobile && (
        <ShortTaleContainer />
      )}
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
        {isMobile && (
          <Button
            sx={{
              mt: 4,
            }}
            variant="contained"
            onClick={handleCreateTaleBtn}
            size="large"
          >
            Stwórz bajkę
          </Button>
        )}
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
      {isMobile && (
        <Grid
          item
          sx={{ display: { xs: "block" } }}
          xs={12}
          ref={createTaleFormRef}
          height="100vh"
        >
          <Outlet />
          {createTaleStatus === Status.Success && (
            <ShortTaleContainerMobile
              ref={mobileTaleContainerRef}
              tale={tale!}
            />
          )}
        </Grid>
      )}
      {createTaleStatus === Status.Loading && (
        <FullScreenLoading text="Teraz piszemy Twoją bajkę. Daj nam jeszcze kilka sekund" />
      )}
    </>
  );
};

export default Home;
