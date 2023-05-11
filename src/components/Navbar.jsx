import React from "react";
import "./css/navbar.css";
import { Button } from "@mui/material";
import { blue } from "@mui/material/colors";

const Navbar = () => {

const thispath = window.location.pathname;
const navdisplay = () => {
  if (thispath === "/") 
  {
      const retnav = (<div><Button style={{ backgroundColor: blue[500],fontWeight: "bolder" }} variant="contained">SignUp</Button>
      &nbsp;&nbsp;<Button style={{ backgroundColor: blue[500],fontWeight: "bolder" }}  variant="contained">Login</Button></div>) ;
      return retnav; 
  }

}

return (
    <div>
      <div class="navbar">
        <h6 class="navtext">Blood Bank Management System</h6>
        <div class="avatarr">
          {navdisplay()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
