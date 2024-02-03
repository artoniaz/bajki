import { configureStore } from "@reduxjs/toolkit";
import createTaleReducer from './tales/createTale/createTaleSlice'

export const store = configureStore({
  reducer: {
    createTale: createTaleReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
