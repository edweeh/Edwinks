import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Alibaba = () => {
    var info=[{name:"Jibin",age:90,place:"China"},
    {name:"Devadarsh",age:60,place:"Africa"},
    {name:"Deepak",age:50,place:"Indonesia"}
]
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Place</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {info.map((value,index)=>{
                            return <TableRow>
                                <TableCell key={index}>{value.name}</TableCell>
                                <TableCell key={index}>{value.age}</TableCell>
                                <TableCell key={index}>{value.place}</TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                    </Table>      
                    </TableContainer>
    </div>
  )
}

export default  Alibaba
