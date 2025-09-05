import { configureStore } from "@reduxjs/toolkit";
import spotifyReducer from "./slice";

export const store = configureStore({
  reducer: {
    spotify: spotifyReducer,
  },
});
