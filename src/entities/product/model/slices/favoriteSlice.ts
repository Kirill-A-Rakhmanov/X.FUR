import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/store";
import { tItemCard, tSetQuantity } from "../types";
import { calcFavoriteTotalPrice, calcFavoriteTotalQuantity } from "../services";

interface tTrendingState {
  items: tItemCard[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: tTrendingState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<tItemCard>) {
      const findItem = state.items.find(
        (obj) => obj.article === action.payload.article
      );
      if (findItem) {
        findItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity = calcFavoriteTotalQuantity(state.items);
      state.totalPrice = calcFavoriteTotalPrice(state.items);
    },
    removeFromFavorite(state, action: PayloadAction<tItemCard>) {
      state.items = state.items.filter(
        (obj) => obj.article !== action.payload.article
      );
      state.totalQuantity = calcFavoriteTotalQuantity(state.items);
      state.totalPrice = calcFavoriteTotalPrice(state.items);
    },
    incrementFavoriteQuantity(state, action: PayloadAction<string>) {
      const findItem = state.items.find(
        (obj) => obj.article === action.payload
      );
      if (findItem) {
        findItem.quantity++;
      }
      state.totalQuantity = calcFavoriteTotalQuantity(state.items);
      state.totalPrice = calcFavoriteTotalPrice(state.items);
    },
    decrementFavoriteQuantity(state, action: PayloadAction<string>) {
      const findItem = state.items.find(
        (obj) => obj.article === action.payload
      );
      if (findItem) {
        findItem.quantity--;
      }
      state.totalQuantity = calcFavoriteTotalQuantity(state.items);
      state.totalPrice = calcFavoriteTotalPrice(state.items);
    },
    setFavoriteQuantity(state, action: PayloadAction<tSetQuantity>) {
      const findItem = state.items.find(
        (obj) => obj.article === action.payload.article
      );
      if (findItem) {
        findItem.quantity = action.payload.quantity;
      }
      state.totalQuantity = calcFavoriteTotalQuantity(state.items);
      state.totalPrice = calcFavoriteTotalPrice(state.items);
    },
  },
});

export const {
  addToFavorite,
  removeFromFavorite,
  incrementFavoriteQuantity,
  decrementFavoriteQuantity,
  setFavoriteQuantity,
} = favoriteSlice.actions;

export const selectFavoriteItems = (state: RootState) => state.favorite.items;
export const selectFavoriteQuantity = (state: RootState) =>
  state.favorite.totalQuantity;

export default favoriteSlice.reducer;
