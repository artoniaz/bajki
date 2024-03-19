import { Grid } from "@mui/material";
import BackgroundImageBox from "./BackgroundImageBox";
import BackgroundOpacityBox from "./BackgroundOpacityBox";
import { useLocation } from "react-router-dom";

const AppContainer = ({ children }: { children: JSX.Element }) => {
  const { pathname } = useLocation();

  const pathnamesWithOpacity = ["/myTales", "/myProfile", "/tale"];
  var talePath = pathname.slice(0, pathname.lastIndexOf("/"));

  const isOpacity: boolean =
    pathnamesWithOpacity.indexOf(talePath) > -1 ||
    pathnamesWithOpacity.indexOf(pathname) > -1;

  return (
    <Grid container position="relative" component="main">
      <BackgroundImageBox />
      {isOpacity && <BackgroundOpacityBox />}
      <Grid
        container
        zIndex={2}
        sx={{
          display: { xs: "flex", md: "auto" },
          alignItems: { xs: "center", md: "normal" },
          p: { xs: 2, md: 10 },
          overflowX: { xs: "hidden", md: "visible" },
          minHeight: "100vh",
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default AppContainer;
