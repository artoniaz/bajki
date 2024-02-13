import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthInfo, UserInfo, UserModel } from "../../models/UserModel";
import AuthCredentialsModel from "../../models/AuthCredentialsModel";
import { USER_LOGGED_IN } from "../../utils/constants";
import { authService } from "./authService";

export const authActions = {
  registerUser: createAsyncThunk(
    "user/register",
    async (req: AuthCredentialsModel) => {
      const user: AuthInfo = await authService.registerUser(req);
      localStorage.setItem(USER_LOGGED_IN, JSON.stringify(user));
      return user;
    }
  ),
  loginUser: createAsyncThunk(
    "user/login",
    async (req: AuthCredentialsModel) => {
      const user: AuthInfo = await authService.loginUser(req);
      localStorage.setItem(USER_LOGGED_IN, JSON.stringify(user));
      return user;
    }
  ),
  getUserProfile: createAsyncThunk("user/profile", async (req: AuthInfo) => {
    const user: UserInfo = await authService.getUserProfile(req);
    return user;
  }),
};
