import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var [fname, setframe] = useState("eddwin");
    const Changename = () => {
        setframe("edwi")
    }
    return (
        <div>
            <Typography>Welcome {fname}</Typography>
            <Button variant='contained' onClick={Changename}>Change</Button>
            <br>
            </br>

        </div>
    )
}

export default Statebasics
