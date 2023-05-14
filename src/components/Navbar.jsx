import "./css/navbar.css";
import { Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import HomeIcon from '@mui/icons-material/Home';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {


  //page route
  const routeHome = () =>{ 
    window.location.href = "../"
  }
  const routeSignup = () =>{ 
    window.location.href = "/signup";
  }
  const routeLogin = () =>{ 
    window.location.href = "/login";
  }


  const gotoHome = () =>{
    window.location.href = "/";
  }

  //navbar dashboard menu control
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
//navbar button changes on different pages
const navdisplay = () => {
  if (window.location.pathname === "/") 
  {
      let retnav = (<div className="dash-btn"><Button style={{ backgroundColor: blue[500],fontWeight: "bolder" }} variant="contained" onClick={routeSignup}><HowToRegIcon style={{fontSize:"medium"}}></HowToRegIcon>&nbsp;SignUp</Button>
      &nbsp;&nbsp;<Button style={{ backgroundColor: blue[500],fontWeight: "bolder" }}  variant="contained" onClick={routeLogin}><ExitToAppIcon style={{fontSize:"medium"}}></ExitToAppIcon>&nbsp;Login</Button></div>) ;
      return retnav;
} 
else if (window.location.pathname === "/signup")
  {
    let retnav = (<div className="dash-btn"><Button style={{ backgroundColor: blue[500],fontWeight: "bolder" }} variant="contained" onClick={routeHome}><HomeIcon style={{fontSize:"medium"}}></HomeIcon>&nbsp;Home</Button>
    &nbsp;&nbsp;<Button style={{ backgroundColor: blue[500],fontWeight: "bolder" }} variant="contained" onClick={routeLogin}><ExitToAppIcon style={{fontSize:"medium"}}></ExitToAppIcon>&nbsp;Login</Button></div>) ;
    return retnav;
  }
else if (window.location.pathname === "/login")
{
    let retnav = (<div className="dash-btn"><Button style={{ backgroundColor: blue[500],fontWeight: "bolder" }} variant="contained" onClick={routeHome}><HomeIcon style={{fontSize:"medium"}}></HomeIcon>&nbsp;Home</Button>
    &nbsp;&nbsp;<Button style={{ backgroundColor: blue[500],fontWeight: "bolder" }} variant="contained" onClick={routeSignup}><HowToRegIcon style={{fontSize:"medium"}}></HowToRegIcon>&nbsp;SignUp</Button></div>) ;
    return retnav;
  }
else if (window.location.pathname === "/user/dashboard")
{
  let retnav = (<div className="dash-avatarr">
    <React.Fragment>
    <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
      <Tooltip title="Account">
        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined} aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}>
          <Avatar sx={{ width: 40, height: 40 }}>M</Avatar>
        </IconButton>
      </Tooltip>
    </Box>
    <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose}
      onClick={handleClose} PaperProps={{elevation: 0, sx: {overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt: 1.5,"& .MuiAvatar-root": {
            width: 32, height: 32,ml: -0.5,mr: 1,},"&:before": {content: '""',display: "block",position: "absolute",
            top: 0,right: 14,width: 10,
            height: 10,bgcolor: "background.paper",transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,},},}}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
      <MenuItem onClick={handleClose}>
      <ListItemIcon><AccountCircleIcon/></ListItemIcon>Profile
      </MenuItem>
      <Divider />
      <MenuItem onClick={gotoHome}>
        <ListItemIcon><HomeIcon fontSize="small" /></ListItemIcon>Home
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon><LogoutIcon fontSize="small" /></ListItemIcon>Logout
      </MenuItem>
    </Menu>
  </React.Fragment>
  </div>);
  return retnav;
}
};


return (
    <div>
      <div class="navbar">
        <div class="navlogo">
          <a href="/" style={{color:"white"}}>
            <img class="navlogo-img" src="https://th.bing.com/th/id/OIP.B-z7OG5fX6O6CQ7h4ITUQAHaHZ?pid=ImgDet&rs=1" alt="Navlogo"/>
            <h6 class="navtext">BBMS</h6>
          </a>
        </div>
        <div class="avatarr">
          {navdisplay()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
