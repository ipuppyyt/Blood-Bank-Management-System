import * as React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from "axios";
import './css/dashboard.css';
import './css/fonts.css'
import Navatar from "./Navatar";

const AdminDashboard = () => {

    var [value,setValue]=useState([])
    useEffect(()=>{
        axios.get('https://bloodbankserver.onrender.com/user/view/adminverified').then((response)=>{
            console.log(response.data.users);
            setValue(response.data.users);
        });
    },[])

    
  return (
    <div>
        <Navatar />
      <div className="tablediv"><br></br>
      <br></br><br></br><br></br>
        <Table className='table'>
            <TableHead className="tablehead">
                <TableRow className="tablerow">
                    <TableCell style={{fontWeight:"bold" , fontFamily:"'PT Sans', sans-serif" }} className="tablecell bold">First Name</TableCell>
                    <TableCell style={{fontWeight:"bold" , fontFamily:"'PT Sans', sans-serif" }} className="tablecell bold">Last Name</TableCell>
                    <TableCell style={{fontWeight:"bold" , fontFamily:"'PT Sans', sans-serif" }} className="tablecell bold">Age</TableCell>
                    <TableCell style={{fontWeight:"bold" , fontFamily:"'PT Sans', sans-serif" }} className="tablecell bold">City</TableCell>
                </TableRow>
            </TableHead>
            <TableBody className="tablehead">
                {value.map((data,ind)=>{
                    return<TableRow>
                        <TableCell className="tablecell">{data.name}</TableCell>
                        <TableCell className="tablecell">{data.age}</TableCell>
                        <TableCell className="tablecell">{data.email}</TableCell>
                        <TableCell className="tablecell">{data.phone}</TableCell>
                        <TableCell className="tablecell">{data.bloodgroup}</TableCell>
                        <TableCell className="tablecell">{data.category}</TableCell>
                        <TableCell className="tablecell">{data.unitsofblood}</TableCell>
                        <TableCell className="tablecell">{data.ailments}</TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table><br></br>
    </div>
    </div>
  )
}

export default AdminDashboard
