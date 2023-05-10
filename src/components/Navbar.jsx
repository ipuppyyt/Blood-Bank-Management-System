import React from "react";
import "./css/navbar.css";
import { Avatar } from "@mui/material";

const Navbar = () => {

return (
    <div>
      <div class="navbar">
        <h6 class="navtext">Blood Bank Management System</h6>
        <div class="avatarr">
              <Avatar alt="O" src="https://list.lisimg.com/image/7938847/740.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
