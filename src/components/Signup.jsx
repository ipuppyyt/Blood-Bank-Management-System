import React from 'react';
import './css/login.css';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';


const Signup = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (   
    <animated.div style={props}>
    <div className='signup-form-main-div center'>
      <br></br><br></br><br></br><br></br>
      <form>
      <div className='login-text-box-main'>
          <TextField className='login-text-box' type='text' id="name" label="Full Name" variant="outlined" required />&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField className='login-text-box' type='email' id="email" label="E-mail" variant="outlined" required />
        </div>
        <div className='login-text-box-main'>
          <TextField className='login-text-box' type='password' id="password" label="Password" variant="outlined" required />&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField className='login-text-box' type='password' id="repassword" label="Retype Password" variant="outlined" required />
        </div>
        <div className='login-text-box-main'>
        <Button type='submit' className='login-page-button' variant="contained">Signup</Button>
        </div>
        <div className='login-text-box-main'>
        <Link to='/login' className='login-page-link' class="wanttosignup">Already have an account? Login</Link>
        </div>
      </form>
    </div>
    </animated.div>   
  )
}

export default Signup
