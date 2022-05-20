import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState,useEffect } from 'react';
export default function BasicTextFields() {
const [search, setSerch]=useState("");
const inputSearch =(event) =>{
  const data=event.target.value;
  setSerch(data);
  console.log(data);
}
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={search} onChange={inputSearch} id="outlined-basic" label="Search" variant="outlined" />
     
    </Box>
  );
}
