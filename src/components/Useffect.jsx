import { TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Useffect = () => {
    var[name,setName]=useState("")
    const ChangeName = (event) => {
        const { name, value } = event.target;
        setName(value); 

    }
    useEffect(() => {
        setName("[Enter name]")
    }, []);
    var[names,setNames]=useState("")
    const Change = (event) => {
        const { names, value } = event.target;
        setNames(value); 

    }
    useEffect(() => {
        setNames("[Enter name]")
    }, []);

  return (
    <div>
      <Typography variant='h3'>My name is{name}</Typography>
      <TextField label="Enter name" onChange={(e) => ChangeName(e)}></TextField>
      <Typography variant='h3'>My friend call me{names}</Typography>
      <TextField label="Enter name" onChange={(e) => Change(e)}></TextField>     
    </div>
  )
}

export default Useffect
