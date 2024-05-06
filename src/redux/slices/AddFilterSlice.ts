import { createSlice } from "@reduxjs/toolkit";
import { FILTER } from "../../types/Filter";
import { Roles } from "../../types/Roles";

const initialState: FILTER = {
  roles: [], 
  location: [], 
  experience: null, 
  minBasePay: null,
  search: ''
}

export const AddFilterSlice = createSlice({
  name: 'filter', 
  initialState, 
  reducers: {
    setRoles: (state, action) => {
      const titleLowerCasedValue = action.payload.roles.map((role: Roles) => role.title.toLowerCase())
      return {
        ...state, 
        roles: titleLowerCasedValue
      }
    },
    setLocation: (state, action) => {
      const lowerCasedValue = action.payload.location.map((loc: string) => loc.toLowerCase())
      return {
        ...state, 
        location: lowerCasedValue
      }
    },
    setExperience: (state, action) => {
      return {
        ...state, 
        experience: action.payload.experience
      } 
    },
    setMinBasePay: (state, action) => {
      return {
        ...state, 
        minBasePay: action.payload.minBasePay
      }
    },
    setSearch: (state, action) => {
      return {
        ...state, 
        search: action.payload.search
      }
    }
  }
})

export const { setRoles, setLocation, setExperience, setMinBasePay, setSearch } = AddFilterSlice.actions
export default AddFilterSlice.reducer