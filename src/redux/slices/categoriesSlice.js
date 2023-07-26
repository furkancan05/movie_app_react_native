import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiKey from "../../service/apiKey";

export const getCategories = createAsyncThunk("getCategories", async () => {
  const data = await fetch(`https://api.themoviedb.org/3/genre/movie/list${apiKey}`).then(async res => await res.json())
  return data.genres
})

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    value: [],
    isLoading: true
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.value = action.payload
      state.isLoading = false
    }),
      builder.addCase(getCategories.pending, (state) => {
        state.isLoading = true
      })
  }
})

export default categoriesSlice.reducer