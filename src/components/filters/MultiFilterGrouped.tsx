import { Autocomplete, AutocompleteRenderGroupParams, AutocompleteRenderInputParams, TextField, styled } from "@mui/material";
import { Roles } from "../../types/Roles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setRoles } from "../../redux/slices/AddFilterSlice";

const GroupHeader = styled('div')`
  padding: 1em .5em;
  color: gray;
`;

const GroupItems = styled('ul')`
  padding: 0;
`;

export default function MultiFilterGrouped({ menu, label }: { menu: Roles[], label: string }) {
  const dispatch = useDispatch<AppDispatch>()
  const [value, setValue] = useState<Roles[]>([])
  console.log('value', value)
  return (
    <Autocomplete
      id='multi-filter-grouped'
      multiple
      fullWidth
      size='small'
      limitTags={2}
      options={menu}
      value={value}
      onChange={(event: any, newValue: Roles[]) => {
        setValue(newValue)
        dispatch(setRoles({ roles: newValue }))
      }}
      groupBy={(option) => option.type}
      getOptionLabel={(option) => option.title}
      renderInput={(params: AutocompleteRenderInputParams) => <TextField {...params} label={label} />}
      renderGroup={(params: AutocompleteRenderGroupParams) => (
        <li key={params.key}>
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>{params.children}</GroupItems>
        </li>
      )}
    />
  )
}


// import { styled, useAutocomplete } from "@mui/material";
// import { PiCaretDownBold } from "react-icons/pi";
// import cross from "../../assets/cross.svg";

// const Root = styled('div') `
//   font-size: 1rem;
//   position: relative;
//   box-sizing: border-box;
//   min-width: 200px; 
// `;

// const Label = styled('label')`
//   color: black; 
//   font-weight: 500;
//   display: block; 
//   margin-bottom: .2em;
// `;

// const InputWrapper = styled('div')`
//   width: fit-content;
//   padding: .5em; 
//   border: 2px solid lightgray; 
//   border-radius: 4px; 
//   display: flex;
//   align-items: center;

//   &:hover {
//     border-color: gray;
//   }

//   &.focused { 
//     border-color: blue;
//   }

//   & input {
//     margin-left: .2rem;
//     width: 100px;
//     font-size: 1.2rem;
//     background-color: white;
//     color: black;
//     outline: none;
//     border: none;
//     padding-right: .8em;
//     border-right: 1px solid lightgray;
//   }
// `;

// const CaretDown = styled(PiCaretDownBold) `
//   outline: none; 
//   color: gray; 
//   font-size: 1.2rem;
//   margin-left: .4rem;
//   &:hover {
//     color: black;
//   }
// `;

// const ListBox = styled('ul')`
//   display: block;
//   border: 2px solid lightgray;
//   color: black; 
//   background-color: white;
//   padding: .3rem 0 .3em 0;
//   box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 10%);
//   border-radius: 4px;
//   list-style: none; 
//   position: absolute;
//   left: 0; 
//   top: calc(100% + -.5rem);

//   & li {
//     padding: .5em;
//     cursor: default;
//   }

//   & li:hover {
//     background-color: lightblue;
//   }
// `;

// function Tag(props) {
//   const { label } = props
//   return (
//     <div className='tag-container'>
//       <span>{label}</span>
//       <img height={15} src={cross} alt="cross" />
//     </div>
//   )
// }

// export default function MultiFilterGrouped({ filterTag }: { filterTag: string }) {
//   // const {
//   //   getRootProps,
//   //   getInputLabelProps,
//   //   getInputProps,
//   //   getTagProps,
//   //   getListboxProps,
//   //   getOptionProps,
//   //   groupedOptions,
//   //   value,
//   //   focused,
//   //   setAnchorEl,
//   // } = useAutocomplete({
//   //   id: 'customized-hook-demo',
//   //   defaultValue: [top100Films[1]],
//   //   multiple: true,
//   //   options: top100Films,
//   //   getOptionLabel: (option) => option.title,
//   // })
//   return (
//     <Root>
//       <div>
//         <Label>Roles</Label>
//         <InputWrapper>
//           <Tag label={'Frontend'} />
//           <input type="text" />
//           <CaretDown />
//         </InputWrapper>
//       </div>
//       <ListBox>
//         <li>
//           <span>Hello World</span>
//         </li>
//         <li>
//           <span>Hello World</span>
//         </li>
//       </ListBox>
//     </Root>
//   )
// }
{/* <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
          {value.map((option: FilmOptionType, index: number) => (
            <StyledTag label={option.title} {...getTagProps({ index })} />
          ))}
          <input {...getInputProps()} />
        </InputWrapper> */}