import * as React from "react";
import Navatar from "./Navatar";
import "./css/profile.css";
import { TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";

const Profile = () => {
  return (<div>
    <Navatar />
    <img class="user-banner" src="https://unsplash.it/1000/150?random" alt="banner" />
    <img class="user-avatar" src="https://unsplash.it/100/100?random" alt="avatar" />
    <Link to="/editprofile"><div class="edit-icon" title="Edit Profile"><EditIcon/></div></Link>
    <div class="user-info">
    <TextField id="outlined-basic" label="Outlined" variant="outlined" disabled />
    </div>
  </div>
    
  )
}

export default Profile
