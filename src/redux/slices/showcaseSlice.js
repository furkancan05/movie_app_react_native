import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../service/request";
import { nowPlayingUrl, popularUrl, topRatedUrl, upcomingUrl } from "../../service/urls";

export const getNowPlaying = createAsyncThunk("getNowPlaying", async () => await request(nowPlayingUrl))
export const getPopular = createAsyncThunk("getPopular", async () => await request(popularUrl))
export const getTopRated = createAsyncThunk("getTopRated", async () => await request(topRatedUrl))
export const getUpcoming = createAsyncThunk("getUpcoming", async () => await request(upcomingUrl))

export const showcaseSlice = createSlice({
  name: "Showcase",
  initialState: {
    value: [
      {
        name: "Now Playing",
        datas: [],
        isLoading: true
      },
      {
        name: "Popular",
        datas: [],
        isLoading: true
      },
      {
        name: "Top Rated",
        datas: [],
        isLoading: true
      },
      {
        name: "Upcoming",
        datas: [],
        isLoading: true
      },
    ]
  },
  extraReducers: (builder) => {
    builder.addCase(getNowPlaying.pending, (state) => {
      state.value[0].isLoading = true
    }),
      builder.addCase(getNowPlaying.fulfilled, (state, action) => {
        state.value[0].datas = action.payload.results
        state.value[0].isLoading = false
      }),
      builder.addCase(getPopular.pending, (state) => {
        state.value[1].isLoading = true
      }),
      builder.addCase(getPopular.fulfilled, (state, action) => {
        state.value[1].datas = action.payload.results
        state.value[1].isLoading = false
      }),
      builder.addCase(getTopRated.pending, (state) => {
        state.value[2].isLoading = true
      }),
      builder.addCase(getTopRated.fulfilled, (state, action) => {
        state.value[2].datas = action.payload.results
        state.value[2].isLoading = false
      }),
      builder.addCase(getUpcoming.pending, (state) => {
        state.value[3].isLoading = true
      }),
      builder.addCase(getUpcoming.fulfilled, (state, action) => {
        state.value[3].datas = action.payload.results
        state.value[3].isLoading = false
      })
  }
})

export default showcaseSlice.reducer