import { createAsyncThunk } from "@reduxjs/toolkit";
import TaleModel from "../../../models/TaleModel";

const API_URL = "/api/tales/";

export const TaleActions = {
  createTale: createAsyncThunk("tales/createTale", async (taleReq: TaleModel) => {
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(taleReq),
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  }),
};
