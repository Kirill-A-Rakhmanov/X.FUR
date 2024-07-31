import {
  cartSlice,
  favoriteSlice,
  filterSlice,
  productsSlice,
  trendingSlice,
} from "@/entities/entities";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    trending: trendingSlice.reducer,
    favorite: favoriteSlice.reducer,
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
