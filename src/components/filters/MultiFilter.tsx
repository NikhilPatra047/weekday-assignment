import { Autocomplete, AutocompleteRenderGroupParams, AutocompleteRenderInputParams, TextField, styled } from "@mui/material";
import { useState } from "react";

const GroupItems = styled('ul')`
  padding: 0;
`;

export default function MultiFilter({ menu, label }: { menu: string[], label: string }) {
  const [value, setValue] = useState<string[]>([]);
  return (
    <Autocomplete 
      id='multi-filter'
      multiple
      size='small'
      fullWidth
      limitTags={2}
      value={value}
      onChange={(event: any, newValue: string[]) => {
        setValue(newValue.map((v: string) => v))
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