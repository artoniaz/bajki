import { createAsyncThunk } from "@reduxjs/toolkit";
import taleService from "./taleService";
import constants from "../../utils/constants";
import TaleModel from "../../models/TaleModel";

const taleActions = {
  getTalesByUser: createAsyncThunk(
    "tales/getTales",
    async () => {
      const userToken = localStorage.getItem(constants.USER_TOKEN) ?? '';
      const tales = await taleService.getTalesByUser(userToken);
      return tales;
    }
  ),
  createTale: createAsyncThunk("tales/createTale", async (taleReq: TaleModel) => {
    const tale = await taleService.createTale(taleReq);
    return tale;
  }),
};

export default taleActions;