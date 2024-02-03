import { createSlice } from "@reduxjs/toolkit";
import TaleModel from "../../../models/TaleModel";
import InitialState, { Status } from "../../../models/InitialState";
import { TaleThunk } from "./taleThunk";

const initialState: InitialState<TaleModel> = {
  data: {
    age: 0,
    child_name: "",
    topic: "",
    content: "",
  },
  status: Status.Initial,
  error: null,
};

export const createTaleSlice = createSlice({
  name: "createTale",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(TaleThunk.createTale.pending, (state) => {
      state.status = Status.Loading;
    });
    builder.addCase(TaleThunk.createTale.fulfilled, (state, action) => {
      state.status = Status.Success;
      state.data = action.payload;
    });
    builder.addCase(TaleThunk.createTale.rejected, (state, action) => {
      console.log(state, action);
      state.status = Status.Failed;
      state.error = action.error.message!;
    });
  },
});

export default createTaleSlice.reducer;
