import { TextField } from "@mui/material";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setSearch } from "../../redux/slices/AddFilterSlice";

export default function TextFilter({ label }: { label: string }) {
    const dispatch = useDispatch<AppDispatch>()
    const [name, setName] = useState<string>('')
    return (
        <TextField 
            id='text-field'
            fullWidth
            size='small'
            label={label}
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value)
                dispatch(setSearch({ search: event.target.value }))
            }}
        />
    )
}