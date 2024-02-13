import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { USER_LOGGED_IN } from "../utils/constants";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { authActions } from "../features/auth/authActions";
import { AuthInfo } from "../models/UserModel";

const RootLayout = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.data.authInfo?._id);

  useEffect(() => {
    const userJson = localStorage.getItem(USER_LOGGED_IN);
    const user: AuthInfo = userJson ? JSON.parse(userJson) : null;
    if (user) {
      dispatch(authActions.getUserProfile(user));
    }
  },[userId])
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
