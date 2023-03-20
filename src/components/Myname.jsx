import { TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Myname = () => {
    var [fName, setName] = useState("")
    const ChangeName = (event) => {
        const { name, value } = event.target;
        setName(value);

    }
    useEffect(() => {
        setName("[Enter name]")
    }, []);
    return (

        <div>
            <Typography variant='h3'>My name is {fName}</Typography>
            <br>
            </br>
            <TextField label="Enter name" onChange={(e) => ChangeName(e)}></TextField>
            <br></br>
        </div>
    )
}

export default Myname
