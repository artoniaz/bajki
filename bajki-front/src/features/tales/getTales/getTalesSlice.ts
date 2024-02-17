import { createSlice } from "@reduxjs/toolkit";
import InitialState from "../../../models/InitialState";
import TaleModel from "../../../models/TaleModel";
import { Status } from "../../../utils/stateStatus";
import taleActions from "./talesActions";

const initialState:InitialState<TaleModel | null> = {
    data: null,
    status: Status.Initial,
    error: null,
}

export const getTalesSlice = createSlice({
    name: "getTales",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder.addCase(taleActions.getTalesByUser.pending, (state) => {
        state.status = Status.Loading;
      });
      builder.addCase(taleActions.getTalesByUser.fulfilled, (state, action) => {
        state.status = Status.Success;
        state.data = action.payload;
      });
      builder.addCase(taleActions.getTalesByUser.rejected, (state, action) => {
        state.status = Status.Failed;
        state.error = action.error.message!;
      });
    },
  });
  
  export default getTalesSlice.reducer;