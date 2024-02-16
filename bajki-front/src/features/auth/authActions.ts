import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserProfile, UserModel } from "../../models/UserModel";
import AuthCredentialsModel from "../../models/AuthCredentialsModel";
import { authService } from "./authService";

export const authActions = {
  registerUser: createAsyncThunk(
    "user/register",
    async (req: AuthCredentialsModel) => {
      const userToken: string = await authService.registerUser(req);
      return userToken;
    }
  ),
  loginUser: createAsyncThunk(
    "user/login",
    async (req: AuthCredentialsModel) => {
      const userToken: string = await authService.loginUser(req);
      return userToken;
    }
  ),
  getUserProfile: createAsyncThunk(
    "user/profile",
    async (userToken: string) => {
      const userProfile: UserProfile = await authService.getUserProfile(
        userToken
      );
      return { userProfile, userToken };
    }
  ),
};
