import React from 'react';
import './css/login.css';
import { Button, TextField } from '@mui/material';

const Login = () => {
  return (
    <div className='login-form-main-div center'>
      <br></br><br></br><br></br><br></br>
      <form action="">
        <div className='login-text-box-main'>
          <TextField className='login-text-box' type='email' id="email" label="E-mail" variant="outlined" required />
        </div>
        <div className='login-text-box-main'>
          <TextField className='login-text-box' type='password' id="password" label="Password" variant="outlined" required />
        </div>
        <div className='login-text-box-main'>
        <Button type='submit' className='login-page-button' variant="contained">Login</Button>
        </div>
        <div className='login-text-box-main'>
        <a href='/signup' className='login-page-link' class="wanttosignup">Don't have an account? Signup</a>
        </div>
      </form>
    </div>
  )
}

export default Login
