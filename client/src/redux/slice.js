import { createSlice } from "@reduxjs/toolkit";

const spotifySlice = createSlice({
  name: "spotify",
  initialState: {
    accessToken: localStorage.getItem("access_token") || null,
    topArtists: [],
    topTracks: [],
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      localStorage.setItem("access_token", action.payload);
    },
    setTopArtist: (state, action) => {
      state.topArtists = action.payload;
    },
    setTopTracks: (state, action) => {
      state.topTracks = action.payload;
    },
  },
});

export const { setAccessToken, setTopArtist, setTopTracks } =
  spotifySlice.actions;
export default spotifySlice.reducer;
