import { createAsyncThunk } from "@reduxjs/toolkit";
import taleService from "../taleService";
import constants from "../../../utils/constants";

const taleActions = {
  getTalesByUser: createAsyncThunk(
    "tales/getTales",
    async () => {
      const userToken = localStorage.getItem(constants.USER_TOKEN) ?? '';
      const tales = await taleService.getTalesByUser(userToken);
      return tales;
    }
  ),
};

export default taleActions;