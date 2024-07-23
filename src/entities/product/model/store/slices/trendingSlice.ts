import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../productStore";
import { queryParams, tItemCard } from "../../types";
import { getItems } from "../../services";
import { mapProductCardData } from "@/entities/entities";

interface tTrendingState {
  items: tItemCard[];
  status: Status;
}

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export const fetchTrendingProducts = createAsyncThunk(
  "trending/fetchTrendingStatus",
  async (params: queryParams) => {
    const response: tItemCard[] = await getItems(params).then((data) =>
      data.map((obj) => mapProductCardData(obj))
    );
    return response as tItemCard[];
  }
);

const initialState: tTrendingState = {
  items: [],
  status: Status.LOADING,
};

export const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingProducts.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(
        fetchTrendingProducts.fulfilled,
        (state, action: PayloadAction<tItemCard[]>) => {
          state.status = Status.SUCCESS;
          state.items = action.payload;
        }
      )
      .addCase(fetchTrendingProducts.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const {} = trendingSlice.actions;

export const trendingItems = (state: RootState) => state.trending.items;

export default trendingSlice.reducer;
