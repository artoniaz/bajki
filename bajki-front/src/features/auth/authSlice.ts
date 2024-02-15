import { createSlice } from "@reduxjs/toolkit";
import { authActions } from "./authActions";
import InitialAuthState from "../../models/InitialAuthState";
import { Status } from "../../utils/stateStatus";
import constants from "../../utils/constants";

const initialState: InitialAuthState = {
  data: {
    userToken: null,
    userProfile: null,
  },
  loginStatus: Status.Initial,
  loginError: null,
  registerStatus: Status.Initial,
  registerError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.data.userProfile = payload;
    },
    logoutUser: (state) => {
      state.loginStatus = Status.Initial;
      state.registerStatus = Status.Initial;
      state.data.userToken = "";
      state.data.userProfile = null;
      state.loginError = null;
      state.registerError = null;
      localStorage.removeItem(constants.USER_TOKEN);
      localStorage.removeItem(constants.USER_PROFILE);
    },
  },
  extraReducers(builder) {
    // register user
    builder.addCase(authActions.registerUser.pending, (state) => {
      state.registerStatus = Status.Loading;
      state.registerError = null;
    });
    builder.addCase(authActions.registerUser.fulfilled, (state, action) => {
      const userToken = action.payload;
      state.registerStatus = Status.Success;
      state.registerError = null;
      state.data.userToken = userToken;
      localStorage.setItem(constants.USER_TOKEN, userToken);
    });
    builder.addCase(authActions.registerUser.rejected, (state, action) => {
      state.registerStatus = Status.Failed;
      state.registerError = action.error.message!;
    });

    // login user
    builder.addCase(authActions.loginUser.pending, (state) => {
      state.loginStatus = Status.Loading;
      state.loginError = null;
    });
    builder.addCase(authActions.loginUser.fulfilled, (state, action) => {
      const userToken = action.payload;
      state.loginStatus = Status.Success;
      state.loginError = null;
      state.data.userToken = userToken;
      localStorage.setItem(constants.USER_TOKEN, userToken);
    });
    builder.addCase(authActions.loginUser.rejected, (state, action) => {
      state.loginStatus = Status.Failed;
      state.loginError = action.error.message!;
    });

    // get user profile
    builder.addCase(authActions.getUserProfile.pending, (state) => {});
    builder.addCase(authActions.getUserProfile.fulfilled, (state, action) => {
      // state.loginStatus = Status.Success;
      //TODO: error handling
      const userProfile = action.payload.userProfile;
      state.data.userProfile = userProfile;
      state.data.userToken = action.payload.userToken;
      localStorage.setItem(constants.USER_PROFILE, JSON.stringify(userProfile));
    });
    builder.addCase(authActions.getUserProfile.rejected, (state, action) => {});
  },
});

export const { setCredentials, logoutUser } = authSlice.actions;
export default authSlice.reducer;
