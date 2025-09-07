import { createSlice } from "@reduxjs/toolkit";

const spotifySlice = createSlice({
  name: "spotify",
  initialState: {
    accessToken: localStorage.getItem("access_token") || null,
    topArtists: [],
    topTracks: [],
    artistRoast: "",
    trackRoast: "",
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      localStorage.setItem("access_token", action.payload);
    },
    setTopArtist: (state, action) => {
      state.topArtists = action.payload;
    },
    setTopTrack: (state, action) => {
      state.topTracks = action.payload;
    },
    setArtistRoast: (state, action) => {
      state.artistRoast = action.payload;
    },
    setTrackRoast: (state, action) => {
      state.trackRoast = action.payload;
    },
  },
});

export const {
  setAccessToken,
  setTopArtist,
  setTopTrack,
  setArtistRoast,
  setTrackRoast,
} = spotifySlice.actions;
export default spotifySlice.reducer;
