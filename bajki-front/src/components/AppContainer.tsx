import { Grid } from "@mui/material";
import BackgroundImageBox from "./BackgroundImageBox";

const AppContainer = ({ children }: {children: JSX.Element}) => {
  return (
    <Grid container position="relative" component="main">
      <BackgroundImageBox />
      <Grid
        container
        zIndex={2}
        sx={{
          p: { xs: 2, md: 10 },
          height: "100vh",
          display: { xs: "flex", md: "auto" },
          alignItems: { xs: "center", md: "normal" },
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default AppContainer;
