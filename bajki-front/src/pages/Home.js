import { Box, Button, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { navItems } from "../Router";

const Home = () => {
  return (
    <Grid container spacing={0} alignItems="center" justifyContent="center">
      <Box
        component="img"
        sx={{
          height: "100vh",
          width: "100%",
          opacity: 0.85,
        }}
        alt="Children reading, having fun."
        src={require("../images/coverImg.jpg")}
      ></Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "absolute",
        }}
      >
        <h2>Bajki dla dzieci na dowolny temat</h2>
        <p>Wybierz temat z dzieckiem</p>
        <Button
          component={NavLink}
          to={navItems.createTale.path}
          variant="contained"
        >
          {navItems.createTale.content}
        </Button>
      </Box>
    </Grid>
  );
};

export default Home;
