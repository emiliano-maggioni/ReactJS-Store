import React, { useRef }  from 'react'
import classes from "./SearchBar.module.scss";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const SearchBar = (props) => {
  
  const inputRef = useRef(); 

  const searchProducts = (val) => { 
    let oldVal = inputRef.current.value;
    const timer = setTimeout(() => {
      if(oldVal == inputRef.current.value){
        console.log("-----> FILTRIAMO RISULTATI");
      }
    }, 500); 
    return() => {
      clearTimeout(timer);
    };

  }

  return (
    <div className={classes.container} >
   <TextField
        id="searchField"
        label="Search product"
        inputRef={inputRef}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
        onChange={(e) => searchProducts(e.target.value)}
      />
     </div>
  );
}

export default SearchBar;
