import { Button } from '@mui/material';
import React, { useState } from 'react'

const Ns = () => {
    var [page, setframe] = useState("Home Page")
    const clickHome = () => {
        setframe("Home Page")
    }
    const clickgallery = () => {
        setframe("Gallery Page")
    }
    const clickcontact = () => {
        setframe("Contact Page")
    }
    return (
        <div>
            <h1>{page}</h1>
            <Button variant="contained" color='primary' onClick={clickHome}>Home Page</Button>
            <Button variant="contained" color='success' onClick={clickgallery}>Gallery Page</Button>
            <Button variant="contained" color='secondary' onClick={clickcontact}>Contact Page</Button>

        </div>
    )
}

export default Ns
