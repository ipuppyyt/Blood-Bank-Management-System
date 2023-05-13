import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './css/footer.css';

const Footer = () => {
  return (
    <div className='footer'>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#000"}}>
        <Toolbar>
          <Typography variant="p" style={{fontWeight:"bold"}} component="div" sx={{ flexGrow: 1 }}>
            &copy; {(new Date().getFullYear())} Blood Bank Management System. All Rights Reserved.
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
};

export default Footer;
