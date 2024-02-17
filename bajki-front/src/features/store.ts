import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createTaleReducer from "./tales/createTale/createTaleSlice";
import authReducer from "./auth/authSlice";
import getTalesReducer from "./tales/getTales/getTalesSlice";

const combinedReducers = combineReducers({
  auth: authReducer,
  createTale: createTaleReducer,
  getTales: getTalesReducer,
});

export const rootReducer = (state: any, action: any) => {
  if (action.type === "auth/logoutUser") {
    return combinedReducers(undefined, action);
  }
  return combinedReducers(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
