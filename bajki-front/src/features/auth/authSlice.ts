import { createSlice } from "@reduxjs/toolkit";
import InitialState, { Status } from "../../models/InitialState";
import { UserModel } from "../../models/UserModel";
import { authActions } from "./authActions";
import { USER_TOKEN } from "../../utils/constants";

const initialState: InitialState<UserModel | null> = {
  data: {
    _id: "",
    userToken: "",
    userInfo: null,
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
      state.data = null;
      state.error = null;
      localStorage.removeItem(USER_TOKEN);
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
      state.data = action.payload;
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
      state.data = action.payload;
    });
    builder.addCase(authActions.loginUser.rejected, (state, action) => {
      state.status = Status.Failed;
      state.error = action.error.message!;
    });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
