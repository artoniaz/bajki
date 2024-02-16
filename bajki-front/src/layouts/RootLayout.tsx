import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { authActions } from "../features/auth/authActions";
import { setCredentials } from "../features/auth/authSlice";
import constants from "../utils/constants";

const RootLayout = () => {
  const dispatch = useAppDispatch();
  const { userProfile, userToken } = useAppSelector((state) => state.auth.data);

  useEffect(() => {
    if (!userProfile) {
      const user = localStorage.getItem(constants.USER_PROFILE);
      if (user) {
        const token = localStorage.getItem(constants.USER_TOKEN);
        dispatch(setCredentials({user, token}));
      } else {
        if (userToken) {
          dispatch(authActions.getUserProfile(userToken!));
        }

      }
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
