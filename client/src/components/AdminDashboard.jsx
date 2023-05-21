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
            console.log(response.data);
            setValue(response.data);
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
                <TableCell style={{fontWeight:"bold", fontSize:"16px" , textAlign:"center" , fontFamily:"'PT Sans', sans-serif" }} className="tablecell bold">Full Name</TableCell>
                    <TableCell style={{fontWeight:"bold", fontSize:"16px" , textAlign:"center" , fontFamily:"'PT Sans', sans-serif" }} className="tablecell bold">Age</TableCell>
                    <TableCell style={{fontWeight:"bold", fontSize:"16px" , textAlign:"center" , fontFamily:"'PT Sans', sans-serif" }} className="tablecell bold">E-Mail</TableCell>
                    <TableCell style={{fontWeight:"bold", fontSize:"16px" , textAlign:"center" , fontFamily:"'PT Sans', sans-serif" }} className="tablecell bold">Phone</TableCell>
                    <TableCell style={{fontWeight:"bold", fontSize:"16px" , textAlign:"center" , fontFamily:"'PT Sans', sans-serif" }} className="tablecell bold">Blood Group</TableCell>
                    <TableCell style={{fontWeight:"bold", fontSize:"16px" , textAlign:"center" , fontFamily:"'PT Sans', sans-serif" }} className="tablecell bold">Category</TableCell>
                    <TableCell style={{fontWeight:"bold", fontSize:"16px" , textAlign:"center" , fontFamily:"'PT Sans', sans-serif" }} className="tablecell bold">Units Of Blood</TableCell>
                    <TableCell style={{fontWeight:"bold", fontSize:"16px" , textAlign:"center" , fontFamily:"'PT Sans', sans-serif" }} className="tablecell bold">Ailments</TableCell>
                </TableRow>
            </TableHead>
            <TableBody className="tablehead">
                {value.map((data)=>{
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
