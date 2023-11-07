import React from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Input, TextField } from "@mui/material";
import { useState } from "react";


const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("")
    return(
        <div>
            <form>
            <TextField
             InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <IconButton type="submit" aria-label="search">
                            <Search />
                        </IconButton>
                    </InputAdornment>
                ),
             }}
             onInput={(e) => {
                setSearchQuery(e.target.value)
             }} 
             
             variant="outlined"
             placeholder="search..."
             size="small"           
            >
            </TextField>
            </form>
        </div>
    )
}

export default SearchBar