import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from "./slices/categoriesSlice"
import showcaseSlice from './slices/showcaseSlice'
import favoritesSlice from './slices/favoritesSlice'

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    showcase: showcaseSlice,
    favorites: favoritesSlice
  }
})