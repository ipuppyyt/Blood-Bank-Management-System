import React from 'react';
import './css/login.css';
import { Button, TextField } from '@mui/material';
import { useSpring, animated } from 'react-spring';


const AdminLogin = () => {
    const props = useSpring({ opacity: 1, from: { opacity: -0} });
  return (
    <div>
    <animated.div style={props}>
    <div className='login-form-main-div center'>
      <br></br><br></br><br></br><br></br>
      <form>
        <div className='login-text-box-main'>
          <TextField className='login-text-box' type='email' id="email" label="E-mail" variant="outlined" required />
        </div>
        <div className='login-text-box-main'>
          <TextField className='login-text-box' type='password' id="password" label="Password" variant="outlined" required />
        </div>
        <div className='login-text-box-main'>
        <Button type='submit' className='login-page-button' variant="contained" style={{fontWeight:"bold"}}>Login</Button>
        </div>
      </form>
    </div>
    </animated.div>
    </div>
  )
}

export default AdminLogin
