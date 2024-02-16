import { configureStore } from "@reduxjs/toolkit";
import createTaleReducer from "./tales/createTale/createTaleSlice";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    createTale: createTaleReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
