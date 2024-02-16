import { createSlice } from "@reduxjs/toolkit";
import { authActions } from "./authActions";
import { Status } from "../../utils/stateStatus";
import constants from "../../utils/constants";
import customEnqueueSnackbar from "../../utils/customEnqueueSnackbar";
import InitialState from "../../models/InitialState";
import { UserModel } from "../../models/UserModel";

const initialState: InitialState<UserModel> = {
  data: {
    userToken: null,
    userProfile: null,
  },
  status: Status.Initial,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.data.userProfile = JSON.parse(payload.user);
      state.data.userToken = payload.token;
    },
    logoutUser: (state) => {
      state.status = Status.Initial;
      state.data.userToken = "";
      state.data.userProfile = null;
      state.error = null;
      localStorage.removeItem(constants.USER_TOKEN);
      localStorage.removeItem(constants.USER_PROFILE);
    },
  },
  extraReducers(builder) {
    // register user
    builder.addCase(authActions.registerUser.pending, (state) => {
      state.status = Status.Loading;
      state.error = null;
    });
    builder.addCase(authActions.registerUser.fulfilled, (state, action) => {
      const userToken = action.payload;
      state.status = Status.Success;
      state.error = null;
      state.data.userToken = userToken;
      localStorage.setItem(constants.USER_TOKEN, userToken);
    });
    builder.addCase(authActions.registerUser.rejected, (state, action) => {
      state.status = Status.Failed;
      state.error = action.error.message!;
      customEnqueueSnackbar({
        message: action.error.message!,
        variant: 'error',
      });
    });

    // login user
    builder.addCase(authActions.loginUser.pending, (state) => {
      state.status = Status.Loading;
      state.error = null;
    });
    builder.addCase(authActions.loginUser.fulfilled, (state, action) => {
      const userToken = action.payload;
      state.error = null;
      state.data.userToken = userToken;
      localStorage.setItem(constants.USER_TOKEN, userToken);
    });
    builder.addCase(authActions.loginUser.rejected, (state, action) => {
      state.status = Status.Failed;
      state.error = action.error.message!;
      customEnqueueSnackbar({
        message: action.error.message!,
        variant: 'error',
      });
    });

    // get user profile
    builder.addCase(authActions.getUserProfile.pending, (state) => {});
    builder.addCase(authActions.getUserProfile.fulfilled, (state, action) => {
      const userProfile = action.payload.userProfile;
      state.status = Status.Success;
      state.data.userProfile = userProfile;
      state.data.userToken = action.payload.userToken;
      localStorage.setItem(constants.USER_PROFILE, JSON.stringify(userProfile));
      customEnqueueSnackbar({
        message: `Cześć, ${userProfile.name}`,
        variant: "success",
      });
    });
    builder.addCase(authActions.getUserProfile.rejected, (state, action) => {
      state.status = Status.Failed;
      state.error = action.error.message!;
      customEnqueueSnackbar({
        message: action.error.message!,
        variant: 'error',
      });
    });
  },
});

export const { setCredentials, logoutUser } = authSlice.actions;
export default authSlice.reducer;
