import { configureStore } from "@reduxjs/toolkit";
import createTaleReducer from "./tales/createTale/createTaleSlice";
import authReducer from "./auth/authSlice";
import getTalesReducer from "./tales/getTales/getTalesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    createTale: createTaleReducer,
    getTales: getTalesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
