import * as React from "react";
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from "axios";
import './css/dashboard.css';
import './css/fonts.css'
import Navatar from "./Navatar";

const AdminRequest = () => {

  var [value,setValue]=useState([])
  useEffect(()=>{
      axios.get('https://bloodbankserver.onrender.com/user/view/pendingverification').then((response)=>{
          console.log(response.data);
          setValue(response.data);
      });
  },[])



  const deleteuser=(id)=>{
      const data ={_id : id};
      const newvalue=value.filter((data)=>{return data._id !== id})
      axios.post(`https://bloodbankserver.onrender.com/user/delete/pendingverification`,data).then((response)=>{
          console.log(response.data);
            setValue(newvalue);
      })
  }


  const acceptrequest=(data)=>{
    axios.post(`https://bloodbankserver.onrender.com/user/new/adminverification`,data).then((response)=>{
        console.log(response.data);
  })
  axios.post(`https://bloodbankserver.onrender.com/user/delete/pendingverification`,data).then((response)=>{
    const newvalue=value.filter((v)=>{return v._id !== data._id})
    setValue(newvalue);
})
}


  return (
    <div>
    <Navatar />
  <div className="tablediv"><br></br>
  <br></br><br></br><br></br>
    <Table className='table'>
        <TableHead className="tablehead">
            <TableRow className="tablerow">
                <TableCell style={{fontWeight:"bold", fontSize:"16px" , textAlign:"center"  , fontFamily:"'PT Sans', sans-serif" }} className="tablecell bold">Full Name</TableCell>
                <TableCell style={{fontWeight:"bold", fontSize:"16px" , textAlign:"center"  , fontFamily:"'PT Sans', sans-serif" }} className="tablecell bold">Age</TableCell>
                <TableCell style={{fontWeight:"bold", fontSize:"16px" , textAlign:"center"  , fontFamily:"'PT Sans', sans-serif" }} className="tablecell bold">E-Mail</TableCell>
                <TableCell style={{fontWeight:"bold", fontSize:"16px" , textAlign:"center"  , fontFamily:"'PT Sans', sans-serif" }} className="tablecell bold">Phone</TableCell>
                <TableCell style={{fontWeight:"bold", fontSize:"16px" , textAlign:"center"  , fontFamily:"'PT Sans', sans-serif" }} className="tablecell bold">Blood Group</TableCell>
                <TableCell style={{fontWeight:"bold", fontSize:"16px" , textAlign:"center"  , fontFamily:"'PT Sans', sans-serif" }} className="tablecell bold">Category</TableCell>
                <TableCell style={{fontWeight:"bold", fontSize:"16px" , textAlign:"center"  , fontFamily:"'PT Sans', sans-serif" }} className="tablecell bold">Units of Blood</TableCell>
                <TableCell style={{fontWeight:"bold", fontSize:"16px" , textAlign:"center"  , fontFamily:"'PT Sans', sans-serif" }} className="tablecell bold">Ailments</TableCell>
                <TableCell style={{fontWeight:"bold", fontSize:"16px" , textAlign:"center"  , fontFamily:"'PT Sans', sans-serif" }} className="tablecell bold">Action</TableCell>
            </TableRow>
        </TableHead>
        <TableBody className="tablehead">
            {value.map((data,index)=>{
                return<TableRow>
                    <TableCell className="tablecell">{data.name}</TableCell>
                    <TableCell className="tablecell">{data.age}</TableCell>
                    <TableCell className="tablecell">{data.email}</TableCell>
                    <TableCell className="tablecell">{data.phone}</TableCell>
                    <TableCell className="tablecell">{data.bloodgroup}</TableCell>
                    <TableCell className="tablecell">{data.category}</TableCell>
                    <TableCell className="tablecell">{data.unitsofblood}</TableCell>
                    <TableCell className="tablecell">{data.ailments}</TableCell>
                    <TableCell className="tablecell"><Button color="success" variant="contained" onClick={()=>{acceptrequest(data)}}>Accept</Button>&nbsp;&nbsp;&nbsp;&nbsp;<Button color="error" variant="contained" onClick={()=>{deleteuser(data._id)}}>Decline</Button></TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table><br></br>
</div>
</div>
  )
}

export default AdminRequest
