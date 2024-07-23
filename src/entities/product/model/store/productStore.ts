import { configureStore } from "@reduxjs/toolkit";
import trending from "./slices/trendingSlice";

export const productStore = configureStore({
  reducer: { trending },
});

export type RootState = ReturnType<typeof productStore.getState>;
export type AppDispatch = typeof productStore.dispatch;
