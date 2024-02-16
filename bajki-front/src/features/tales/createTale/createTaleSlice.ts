import { createSlice } from "@reduxjs/toolkit";
import TaleModel from "../../../models/TaleModel";
import { TaleActions } from "./taleActions";
import InitialState from "../../../models/InitialState";
import { Status } from "../../../utils/stateStatus";

const initialState: InitialState<TaleModel | null> = {
  data: null,
  status: Status.Initial,
  error: null,
};

export const createTaleSlice = createSlice({
  name: "createTale",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(TaleActions.createTale.pending, (state) => {
      state.status = Status.Loading;
    });
    builder.addCase(TaleActions.createTale.fulfilled, (state, action) => {
      state.status = Status.Success;
      state.data = action.payload;
    });
    builder.addCase(TaleActions.createTale.rejected, (state, action) => {
      state.status = Status.Failed;
      state.error = action.error.message!;
    });
  },
});

export default createTaleSlice.reducer;
