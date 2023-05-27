import "./css/navbar.css";
import * as React from "react";
import { Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import HomeIcon from '@mui/icons-material/Home';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
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
import DashboardIcon from '@mui/icons-material/Dashboard';
import Badge from '@mui/material/Badge';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navatar = () => {

  const navigate = useNavigate();

  const loggedInadminName = localStorage.getItem("adminName"); 
  const loggedInuserName = localStorage.getItem("userName"); 

  //logout function
  const logoutfn = () => {
    localStorage.removeItem("authenticated");
    localStorage.removeItem("token");
    localStorage.removeItem("adminName");
    localStorage.removeItem("userName");
    navigate('/');
  };


  //navbar dashboard menu control
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  //get the number of requests
  var [countofpending,setValue]=React.useState([0])
  React.useEffect(()=>{
      axios.get('https://bloodbankserver.onrender.com/user/count/pendingverification').then((response)=>{
          console.log(response.data);
          setValue(response.data);
      });
  },[])



  //navbar button changes on different pages
  const navdisplay = () => {

    //Home NavIcon

    if (window.location.pathname === "/") {
      let retnav = (<div className="dash-btn"><Link to="/admin/login"><Button style={{ backgroundColor: blue[500], fontWeight: "bolder" }} variant="contained"><AdminPanelSettingsIcon  style={{ fontSize: "medium" }} />&nbsp;Admin Panel</Button></Link>
        &nbsp;&nbsp;<Link to="/login"><Button style={{ backgroundColor: blue[500], fontWeight: "bolder" }} variant="contained"><ExitToAppIcon style={{ fontSize: "medium" }}></ExitToAppIcon>&nbsp;Login</Button></Link></div>);
      return retnav;
    }

    //User Login NavIcon

    else if (window.location.pathname === "/signup") {
      let retnav = (<div className="dash-btn"><Link to="/"><Button style={{ backgroundColor: blue[500], fontWeight: "bolder" }} variant="contained"><HomeIcon style={{ fontSize: "medium" }}></HomeIcon>&nbsp;Home</Button></Link>
        &nbsp;&nbsp;<Link to="/login"><Button style={{ backgroundColor: blue[500], fontWeight: "bolder" }} variant="contained"><ExitToAppIcon style={{ fontSize: "medium" }}></ExitToAppIcon>&nbsp;Login</Button></Link></div>);
      return retnav;
    }

    //User Login NavIcon

    else if (window.location.pathname === "/login") {
      let retnav = (<div className="dash-btn"><Link to="/"><Button style={{ backgroundColor: blue[500], fontWeight: "bolder" }} variant="contained"><HomeIcon style={{ fontSize: "medium" }}></HomeIcon>&nbsp;Home</Button></Link>
        &nbsp;&nbsp;<Link to="/signup"><Button style={{ backgroundColor: blue[500], fontWeight: "bolder" }} variant="contained"><HowToRegIcon style={{ fontSize: "medium" }}></HowToRegIcon>&nbsp;SignUp</Button></Link></div>);
      return retnav;
    }

    //User Dashboard NavIcon

    else if (window.location.pathname === "/user/dashboard") {
      let retnav = (<div><div className="dash-btn-left"><Link to="/user/apply"><Button style={{ backgroundColor: blue[500], fontWeight: "bolder" }} variant="contained"><VolunteerActivismIcon  style={{ fontSize: "medium" }} />&nbsp;Donate/Receive</Button></Link>
      &nbsp;&nbsp;</div><div className="dash-avatarr">
        <React.Fragment>
          <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
            <Tooltip title="Account">
              <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined} aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}>
                <Avatar sx={{ width: 40, height: 40 }} alt={loggedInuserName} src="/" />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose}
            onClick={handleClose} PaperProps={{
              elevation: 0, sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))", mt: 1.5, "& .MuiAvatar-root": {
                  width: 32, height: 32, ml: -0.5, mr: 1,
                }, "&:before": {
                  content: '""', display: "block", position: "absolute",
                  top: 0, right: 14, width: 10,
                  height: 10, bgcolor: "background.paper", transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
            <MenuItem disabled>
                  <ListItemIcon><AccountCircleIcon /></ListItemIcon>{loggedInuserName}
                </MenuItem>
            <Divider />
            <MenuItem onClick={logoutfn}>
              <ListItemIcon><LogoutIcon fontSize="small" /></ListItemIcon>Logout
            </MenuItem>
          </Menu>
        </React.Fragment>
      </div>
      </div>);
      return retnav;
    }

        //Apply Donor/Receiver NavIcon

        else if (window.location.pathname === "/user/apply") {
          let retnav = (<div><div className="dash-btn-left"><Link to="/user/dashboard"><Button style={{ backgroundColor: blue[500], fontWeight: "bolder" }} variant="contained"><DashboardIcon style={{ fontSize: "medium" }}/>&nbsp;Dashboard</Button></Link>
          &nbsp;&nbsp;</div><div className="dash-avatarr">
            <React.Fragment>
              <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                <Tooltip title="Account">
                  <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined} aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}>
                    <Avatar sx={{ width: 40, height: 40 }} alt={loggedInuserName} src="/"></Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose}
                onClick={handleClose} PaperProps={{
                  elevation: 0, sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))", mt: 1.5, "& .MuiAvatar-root": {
                      width: 32, height: 32, ml: -0.5, mr: 1,
                    }, "&:before": {
                      content: '""', display: "block", position: "absolute",
                      top: 0, right: 14, width: 10,
                      height: 10, bgcolor: "background.paper", transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
                <MenuItem disabled>
                  <ListItemIcon><AccountCircleIcon /></ListItemIcon>{loggedInuserName}
                </MenuItem>
                <Divider />
                <MenuItem onClick={logoutfn}>
                  <ListItemIcon><LogoutIcon fontSize="small" /></ListItemIcon>Logout
                </MenuItem>
              </Menu>
            </React.Fragment>
          </div></div>);
          return retnav;
        }
    

    //Admin Dashboard NavIcon

    else if (window.location.pathname === "/admin/dashboard") {
      let retnav = (<div><div className="dash-btn-left"><Link to="/admin/requests"><Button style={{ backgroundColor: blue[500], fontWeight: "bolder" }} variant="contained">
        <Badge badgeContent={countofpending} color="primary" />
        &nbsp;&nbsp;&nbsp;Requests</Button></Link>
      &nbsp;&nbsp;<Link to="/admin/adddonor"><Button style={{ backgroundColor: blue[500], fontWeight: "bolder" }} variant="contained">Add Donor</Button></Link>&nbsp;&nbsp;</div><div className="dash-avatarr">
        <React.Fragment>
          <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
            <Tooltip title="Account">
              <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined} aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}>
                <Avatar alt={loggedInadminName} src="/" sx={{ width: 40, height: 40 }} />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose}
            onClick={handleClose} PaperProps={{
              elevation: 0, sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))", mt: 1.5, "& .MuiAvatar-root": {
                  width: 32, height: 32, ml: -0.5, mr: 1,
                }, "&:before": {
                  content: '""', display: "block", position: "absolute",
                  top: 0, right: 14, width: 10,
                  height: 10, bgcolor: "background.paper", transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
            <MenuItem disabled>
                  <ListItemIcon><AccountCircleIcon /></ListItemIcon>{loggedInadminName}
            </MenuItem>
            <Divider />
            <MenuItem onClick={logoutfn}>
              <ListItemIcon><LogoutIcon fontSize="small" /></ListItemIcon>Logout
            </MenuItem>
          </Menu>
        </React.Fragment>
      </div>
      </div>);
      return retnav;
    }


    //Admin Request NavIcon
    else if (window.location.pathname === "/admin/requests" || window.location.pathname === "/admin/adddonor") {
      let retnav = (<div><div className="dash-btn-left"><Link to="/admin/dashboard"><Button style={{ backgroundColor: blue[500], fontWeight: "bolder" }} variant="contained"><DashboardIcon style={{ fontSize: "medium" }}/>&nbsp;Dashboard</Button></Link>
      &nbsp;&nbsp;</div><div className="dash-avatarr">
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
            onClick={handleClose} PaperProps={{
              elevation: 0, sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))", mt: 1.5, "& .MuiAvatar-root": {
                  width: 32, height: 32, ml: -0.5, mr: 1,
                }, "&:before": {
                  content: '""', display: "block", position: "absolute",
                  top: 0, right: 14, width: 10,
                  height: 10, bgcolor: "background.paper", transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
            <MenuItem onClick={logoutfn}>
              <ListItemIcon><LogoutIcon fontSize="small" /></ListItemIcon>Logout
            </MenuItem>
          </Menu>
        </React.Fragment>
      </div>
      </div>);
      return retnav;
    }

    //Admin Login NavIcon
    else if (window.location.pathname === "/admin/login") {
        let retnav = (<div className="dash-btn"><Link to="/"><Button style={{ backgroundColor: blue[500], fontWeight: "bolder" }} variant="contained"><HomeIcon style={{ fontSize: "medium" }}></HomeIcon>&nbsp;Home</Button></Link></div>);
        return retnav;
      }
  };

  return (
    <div class="avatarr">
      {navdisplay()}
    </div>
  )
}

export default Navatar
