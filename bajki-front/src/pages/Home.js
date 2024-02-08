import {
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { navItems } from "../Router";

const Home = () => {
  return (
    <Grid container spacing={0} alignItems="end">
      <Box
        component="img"
        sx={{
          width: "100%",
          maxWidth: "3400px",
          height: "100vh",
          objectFit: "cover",
          margin: "auto",
        }}
        alt="Children reading, having fun."
        src={require("../images/coverImg.jpg")}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          height: "100vh",
          width: "100%",
          opacity: 0.2,
          position: "absolute",
          backgroundImage: "linear-gradient(to top, #000000 , #ffffff 70%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          m: 10,
          color: "white",
        }}
      >
        <Typography variant="h1">Bajki dla dzieci na dowolny temat</Typography>
        <Typography variant="h4" sx={{ py: 2 }}>
          Wybierz temat z dzieckiem
        </Typography>
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
