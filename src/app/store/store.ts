import { cartSlice, favoriteSlice, trendingSlice } from "@/entities/entities";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    trending: trendingSlice.reducer,
    favorite: favoriteSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
