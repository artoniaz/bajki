import { createSlice } from "@reduxjs/toolkit";
import { authActions } from "./authActions";
import { USER_LOGGED_IN } from "../../utils/constants";
import InitialAuthState from "../../models/InitialAuthState";
import { Status } from "../../utils/stateStatus";

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
    logoutUser: (state) => {
      state.loginStatus = Status.Initial;
      state.registerStatus = Status.Initial;
      state.data.userToken = "";
      state.data.userProfile = null;
      state.loginError = null;
      state.registerError = null;
      localStorage.removeItem(USER_LOGGED_IN);
    },
  },
  extraReducers(builder) {
    // register user
    builder.addCase(authActions.registerUser.pending, (state) => {
      state.registerStatus = Status.Loading;
      state.registerError = null;
    });
    builder.addCase(authActions.registerUser.fulfilled, (state, action) => {
      state.registerStatus = Status.Success;
      state.registerError = null;
      state.data.userToken = action.payload;
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
      state.loginStatus = Status.Success;
      state.loginError = null;
      state.data.userToken = action.payload;
    });
    builder.addCase(authActions.loginUser.rejected, (state, action) => {
      state.loginStatus = Status.Failed;
      state.loginError = action.error.message!;
    });

    // get user profile
    builder.addCase(authActions.getUserProfile.pending, (state) => {});
    builder.addCase(authActions.getUserProfile.fulfilled, (state, action) => {
      state.loginStatus = Status.Success;
      //TODO: error handling
      state.data.userProfile = action.payload.userProfile;
      state.data.userToken = action.payload.userToken;
    });
    builder.addCase(authActions.getUserProfile.rejected, (state, action) => {});
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
