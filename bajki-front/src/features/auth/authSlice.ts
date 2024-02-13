import { createSlice } from "@reduxjs/toolkit";
import InitialState, { Status } from "../../models/InitialState";
import { UserModel } from "../../models/UserModel";
import { authActions } from "./authActions";
import { USER_LOGGED_IN } from "../../utils/constants";

const initialState: InitialState<UserModel> = {
  data: {
    authInfo: {
      _id: "",
      userToken: "",
    },
    userInfo: {
      _id: "",
      name: "",
      email: "",
    },
  },
  status: Status.Initial,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.status = Status.Initial;
      state.data.authInfo = null;
      state.data.userInfo = null;
      state.error = null;
      localStorage.removeItem(USER_LOGGED_IN);
    },
  },
  extraReducers(builder) {
    // register user
    builder.addCase(authActions.registerUser.pending, (state) => {
      state.status = Status.Loading;
      state.error = null;
    });
    builder.addCase(authActions.registerUser.fulfilled, (state, action) => {
      state.status = Status.Success;
      state.error = null;
      state.data.authInfo = action.payload;
    });
    builder.addCase(authActions.registerUser.rejected, (state, action) => {
      state.status = Status.Failed;
      state.error = action.error.message!;
    });

    // login user
    builder.addCase(authActions.loginUser.pending, (state) => {
      state.status = Status.Loading;
      state.error = null;
    });
    builder.addCase(authActions.loginUser.fulfilled, (state, action) => {
      state.status = Status.Success;
      state.error = null;
      state.data!.authInfo = action.payload;
    });
    builder.addCase(authActions.loginUser.rejected, (state, action) => {
      state.status = Status.Failed;
      state.error = action.error.message!;
    });

    // get user profile
    builder.addCase(authActions.getUserProfile.pending, (state) => {
      state.status = Status.Loading;
      state.error = null;
    });
    builder.addCase(authActions.getUserProfile.fulfilled, (state, action) => {
      state.status = Status.Success;
      state.error = null;
      state.data.userInfo = action.payload;
    });
    builder.addCase(authActions.getUserProfile.rejected, (state, action) => {
      state.status = Status.Failed;
      state.error = action.error.message!;
    });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
