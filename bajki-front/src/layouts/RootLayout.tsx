import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { USER_LOGGED_IN } from "../utils/constants";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { authActions } from "../features/auth/authActions";

const RootLayout = () => {
  const dispatch = useAppDispatch();
  const { userToken } = useAppSelector((state) => state.auth.data);

  useEffect(() => {
    const storedToken = localStorage.getItem(USER_LOGGED_IN);
    if (userToken || storedToken) {
      const token = userToken ?? storedToken;
      dispatch(authActions.getUserProfile(token!));
    }
  }, [userToken]);
  return (
    <div>
      <Navbar />
      <Box component="main">
        <Outlet />
      </Box>
    </div>
  );
};

export default RootLayout;
