import { Autocomplete, AutocompleteRenderInputParams, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setExperience, setMinBasePay } from "../../redux/slices/AddFilterSlice";
import { EXPERIENCE } from "../../../data";

export default function SingleFilter({ menu, label, type }: { menu: string[], label: string, type: string }) {
  const [value, setValue] = useState<string | null>('');
  const dispatch = useDispatch<AppDispatch>()
  return (
    <Autocomplete
      id='single-filter'
      size='small'
      fullWidth
      options={menu}
      value={value}
      onChange={(event: any, newValue: string | null) => {
        setValue(newValue)
        if (type === EXPERIENCE) {
          dispatch(setExperience({ experience: newValue === '' || newValue === null? null: newValue }))
        } else {
          dispatch(setMinBasePay({ minBasePay: newValue === '' || newValue === null? null: newValue }))
        }
      }}
      renderInput={(params: AutocompleteRenderInputParams) => <TextField {...params} label={label} />}
    />
  )
}