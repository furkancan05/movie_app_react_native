import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "Favorites",
  initialState: {
    value: []
  },
  reducers: {
    addFavorites: (state, action) => {
      if (state.value.includes(action.payload)) {
        state.value = state.value.filter(e => e !== action.payload)
      } else {
        state.value = [...state.value, action.payload]
      }
    }
  }
})

export const { addFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer