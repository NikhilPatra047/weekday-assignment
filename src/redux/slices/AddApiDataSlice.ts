import { createSlice } from "@reduxjs/toolkit"
import { API_DATA } from "../../types/ApiData"

const initialState: API_DATA = {
  hasMore: false,
  loading: false, 
  error: false,
  pageNumber: 0,
}

export const AddApiDataSlice = createSlice({
  name: 'apiData', 
  initialState, 
  reducers: {
    initialisation: (state) => {
      state.loading = false
      state.error = false 
      state.hasMore = false
    },
    success: (state, action) => {
      state.hasMore = action.payload.hasMore 
      state.loading = false 
      state.error = false 
    },
    failure: (state) => {
      state.hasMore = false 
      state.loading = false 
      state.error = true 
    },
    incrementPageNumber: (state, action) => {
      state.pageNumber = action.payload.pageNumber
    },
  }
})

export const { initialisation, success, failure, incrementPageNumber } = AddApiDataSlice.actions 
export default AddApiDataSlice.reducer 