import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const options = {
  method: "GET",
  url: "https://www.theaudiodb.com/api/v1/json/2/track.php?m=2115888",
  data: {},
};
const musicVideoOptions = {
  method: "GET",
  url: "https://www.theaudiodb.com/api/v1/json/2/mvid.php?i=112024",
  data: {},
};
export const getNewReleaseSongsList = createAsyncThunk(
  "songs/getNewReleaseSongsList",
  async () => {
    try {
      const response = await axios.request(options);
      return response?.data;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }
);
export const musicVideosList = createAsyncThunk(
  "songs/musicVideosList",
  async () => {
    try {
      const response = await axios.request(musicVideoOptions);
      return response?.data;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }
);
export const songsSlice = createSlice({
  name: "songs",
  initialState: {
    songs: { isLoading: false, data: [], error: false },
    musicVideos: { isLoading: false, data: [], error: false },
  },
  extraReducers: (builder) => {
    builder.addCase(getNewReleaseSongsList.pending, (state) => {
      state.songs.isLoading = true;
      state.songs.error = false;
    });
    builder.addCase(getNewReleaseSongsList.fulfilled, (state, action) => {
      state.songs.isLoading = false;
      if (action.payload?.track?.length > 0) {
        state.songs.data = action.payload.track;
      }
    });
    builder.addCase(getNewReleaseSongsList.rejected, (state) => {
      state.songs.isLoading = false;
      state.songs.error = true;
    });
    builder.addCase(musicVideosList.pending, (state) => {
      state.musicVideos.isLoading = true;
      state.musicVideos.error = false;
    });
    builder.addCase(musicVideosList.fulfilled, (state, action) => {
      state.musicVideos.isLoading = false;
      if (action.payload?.mvids?.length > 0) {
        state.musicVideos.data = action.payload.mvids;
      }
    });
    builder.addCase(musicVideosList.rejected, (state) => {
      state.musicVideos.isLoading = false;
      state.musicVideos.error = true;
    });
  },
});

export default songsSlice.reducer;
