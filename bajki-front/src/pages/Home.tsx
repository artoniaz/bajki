import { Box, Button, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { navItems } from "../utils/navItems";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useAppDispatch();
  const _id = useAppSelector((state) => state.auth.data?._id);
  const userInfo = useAppSelector((state) => state.auth.data?.userInfo);
  // automatically authenticate user if token is found
  const { data, isFetching } = useGetUserProfileQuery("userProfile", {
    // perform a refetch every 15mins
    pollingInterval: 900000,
  });

  console.log("data", data); // user object
  console.log("userInfo", userInfo); // user object

  useEffect(() => {
    console.log("nav id", _id);
    console.log(data);
    if (data) {
      dispatch(setCredentials(data));
    }
  }, [_id, data, dispatch]);
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
          Wybierz temat z dzieckiem {userInfo && userInfo.name}
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
