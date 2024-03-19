import { createSlice } from "@reduxjs/toolkit";
import InitialState from "../../../models/InitialState";
import TaleModel from "../../../models/TaleModel";
import { Status } from "../../../utils/stateStatus";
import taleActions from "../talesActions";

const initialState:InitialState<TaleModel | null> = {
    data: null,
    status: Status.Initial,
    error: null,
}

export const getTaleSlice = createSlice({
    name: "getTale",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder.addCase(taleActions.getTale.pending, (state) => {
        state.status = Status.Loading;
      });
      builder.addCase(taleActions.getTale.fulfilled, (state, action) => {
        state.status = Status.Success;
        state.data = action.payload;
      });
      builder.addCase(taleActions.getTale.rejected, (state, action) => {
        state.status = Status.Failed;
        state.error = action.error.message!;
      });
    },
  });
  
  export default getTaleSlice.reducer;