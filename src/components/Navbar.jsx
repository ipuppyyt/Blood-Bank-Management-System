import React from "react";
import "./css/navbar.css";
import { Avatar } from "@mui/material";

const Navbar = () => {

  // const [age, setAge] = React.useState("");
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };



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
