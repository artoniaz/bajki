import { createSlice } from "@reduxjs/toolkit";
import TaleModel from "../../../models/TaleModel";
import InitialState from "../../../models/InitialState";
import { Status } from "../../../utils/stateStatus";
import taleActions from "../talesActions";

const initialState: InitialState<TaleModel | null> = {
  data: null,
  status: Status.Initial,
  error: null,
};

export const createTaleSlice = createSlice({
  name: "createTale",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers(builder) {
    builder.addCase(taleActions.createTale.pending, (state) => {
      state.status = Status.Loading;
    });
    builder.addCase(taleActions.createTale.fulfilled, (state, action) => {
      state.status = Status.Success;
      state.data = action.payload;
    });
    builder.addCase(taleActions.createTale.rejected, (state, action) => {
      state.status = Status.Failed;
      state.error = action.error.message!;
    });
  },
});

export const { reset } = createTaleSlice.actions;
export default createTaleSlice.reducer;
