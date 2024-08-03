import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";

export const store = () =>
  configureStore({
    reducer: {
      user: userReducer,
    },
  });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<ReturnType<typeof store>["getState"]>;
export type AppDispatch = ReturnType<typeof store>["dispatch"];
