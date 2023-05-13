import * as React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from "axios";
import './css/dashboard.css';
import './css/fonts.css'

const Dashboard = () => {

  var [value,setValue]=useState([])
  useEffect(()=>{
      axios.get('https://dummyjson.com/users').then((response)=>{
          console.log(response.data.users);
          setValue(response.data.users);
      });
  },[])


  return (
    <div>
      <br></br><br></br><br></br>
      <div className="tablediv"><br></br>
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
                        <TableCell className="tablecell">{data.firstName}</TableCell>
                        <TableCell className="tablecell">{data.lastName}</TableCell>
                        <TableCell className="tablecell">{data.age}</TableCell>
                        <TableCell className="tablecell">{data.address.city}</TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </div>
    <br></br>
    </div>
  );
};

export default Dashboard;
