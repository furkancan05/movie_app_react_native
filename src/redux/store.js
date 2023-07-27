import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from "./slices/categoriesSlice"
import showcaseSlice from './slices/shorcaseSlice'

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    showcase: showcaseSlice
  }
})