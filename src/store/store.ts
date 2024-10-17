import { configureStore } from "@reduxjs/toolkit";
import courses from "./courses/slice";
export const store = configureStore({
  reducer: {
    courses: courses,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
