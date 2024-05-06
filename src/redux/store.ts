import { configureStore } from "@reduxjs/toolkit";
import AddApiDataSlice from "./slices/AddApiDataSlice"
import AddFilterSlice from "./slices/AddFilterSlice";

export const store = configureStore({
  reducer: {
    apiData: AddApiDataSlice,
    filter: AddFilterSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
