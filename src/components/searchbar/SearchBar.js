import React  from 'react'
import classes from "./SearchBar.module.scss";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBar = (props) => {
  return (
    <div className={classes.container} >
   <TextField
        id="input-with-icon-textfield"
        label="Search product"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
     </div>
  );
}

export default SearchBar;
