import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/app/store/store";
import { tCollection } from "../types";

interface iCollectionState {
  items: tCollection[];
}

const initialState: iCollectionState = {
  items: [
    {
      collection: "bedroom",
      image:
        "https://www.ikea.com/ext/ingkadam/m/39db979d993790c9/original/PH159259.jpg?f=l",
      items: ["292.282.05", "202.313.06"],
    },
    {
      collection: "bedroom",
      image:
        "https://www.ikea.com/ext/ingkadam/m/1f9bdd6ca0f0563b/original/PH196325.JPG?f=l",
      items: ["505.306.48", "105.012.71"],
    },
    {
      collection: "bedroom",
      image:
        "https://www.ikea.com/ext/ingkadam/m/12bddc3c00083d34/original/PH176393.jpg?f=l",
      items: ["304.268.36", "493.857.51"],
    },
    {
      collection: "bedroom",
      image:
        "https://www.ikea.com/ext/ingkadam/m/5a36edc040c812cf/original/PH194128.jpg?f=l",
      items: ["494.896.40", "305.552.82"],
    },
    {
      collection: "living room",
      image:
        "https://www.ikea.com/ext/ingkadam/m/6b387ce32b9339d/original/PH194132.jpg?f=l",
      items: ["494.896.40", "305.552.82"],
    },
    {
      collection: "living room",
      image:
        "https://www.ikea.com/ext/ingkadam/m/e58b3a5841a4ea8/original/PH178639-crop002.jpg?f=l",
      items: ["193.931.54", "304.518.64", "304.925.72"],
    },
    {
      collection: "living room",
      image:
        "https://www.ikea.com/ext/ingkadam/m/283e1f940808f690/original/PH191695.jpg?f=l",
      items: ["204.268.08", "505.153.13"],
    },
    {
      collection: "living room",
      image:
        "https://www.ikea.com/ext/ingkadam/m/3f20c828679b1e1c/original/PH167471-crop001.jpg?f=l",
      items: ["590.316.98", "702.976.58"],
    },
    {
      collection: "kitchen",
      image:
        "https://www.ikea.com/ext/ingkadam/m/2e70991d53cdffe6/original/PH195959.JPG?f=l",
      items: ["302.126.75", "704.192.64", "705.448.66"],
    },
    {
      collection: "kitchen",
      image:
        "https://www.ikea.com/ext/ingkadam/m/a5875b1d6b86bf1/original/PH186348.jpg?f=l",
      items: ["305.074.65", "104.225.04"],
    },
    {
      collection: "kitchen",
      image:
        "https://www.ikea.com/ext/ingkadam/m/63ae61f08bb80d57/original/PH177919-crop001.jpg?f=l",
      items: ["002.773.95", "503.862.45", "803.903.59"],
    },
    {
      collection: "kitchen",
      image:
        "https://www.ikea.com/ext/ingkadam/m/23ccd7a274dbee32/original/PH190468.jpg?f=l",
      items: ["304.778.78"],
    },
  ],
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {},
});

export const {} = collectionSlice.actions;

export const selectCollection = (state: RootState) => state.collection;

export default collectionSlice.reducer;
