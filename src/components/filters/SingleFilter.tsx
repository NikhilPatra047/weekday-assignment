import { Autocomplete, AutocompleteRenderInputParams, TextField } from "@mui/material";
import { useState } from "react";

export default function SingleFilter({ menu, label }: { menu: string[], label: string }) {
  const [value, setValue] = useState<string | null>('');
  return (
    <Autocomplete
      id='single-filter'
      size='small'
      fullWidth
      options={menu}
      value={value}
      onChange={(event: any, newValue: string | null) => {
        setValue(newValue)
      }}
      renderInput={(params: AutocompleteRenderInputParams) => <TextField {...params} label={label} />}
    />
  )
}