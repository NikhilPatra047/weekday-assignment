import { Autocomplete, AutocompleteRenderGroupParams, AutocompleteRenderInputParams, TextField, styled } from "@mui/material";
import { useState } from "react";
import { LOCATION, OFFICE } from "../../../data";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setLocation, setRemote, setTechStack } from "../../redux/slices/AddFilterSlice";

const GroupItems = styled('ul')`
  padding: 0;
`;

export default function MultiFilter({ menu, label, type }: { menu: string[], label: string, type: string }) {
  const [value, setValue] = useState<string[]>([]);
  const dispatch = useDispatch<AppDispatch>()
  return (
    <Autocomplete 
      id='multi-filter'
      multiple
      size='small'
      fullWidth
      limitTags={2}
      value={value}
      onChange={(event: any, newValue: string[]) => {
        const new_value = newValue.map((v: string) => v)
        setValue(new_value)

        if (type === LOCATION) {
          dispatch(setLocation({ location: new_value}))
        } else if (type === OFFICE) {
          dispatch(setRemote({ remote: new_value }))
        } else {
          dispatch(setTechStack({ techStack: new_value }))
        }
      }}
      options={menu}
      getOptionLabel={(menu) => menu}
      renderInput={(params: AutocompleteRenderInputParams) => <TextField style={{ display: 'flex'}} {...params} label={label} />}
      renderGroup={(params: AutocompleteRenderGroupParams) => (
        <li key={params.key}>
          <GroupItems>{ params.children }</GroupItems>
        </li>
      )}
    />
  )
}