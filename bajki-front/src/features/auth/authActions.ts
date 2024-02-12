import { createAsyncThunk } from "@reduxjs/toolkit";
import UserModel from "../../models/UserModel";
import AuthCredentialsModel from "../../models/AuthCredentialsModel";
import { USER_TOKEN } from "../../utils/constants";
import { authService } from "./authService";

export const authActions = {
  registerUser: createAsyncThunk(
    "user/signup",
    async (req: AuthCredentialsModel) => {
      const user: UserModel = await authService.registerUser(req);
      localStorage.setItem(USER_TOKEN, user.userToken);
      return user;
    }
  ),
  loginUser: createAsyncThunk(
    "user/login",
    async (req: AuthCredentialsModel) => {
      const user: UserModel = await authService.loginUser(req);
      localStorage.setItem(USER_TOKEN, user.userToken);
      return user;
    }
  ),
};
