import React from 'react';
import './css/login.css';
import { Button, TextField } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navatar from './Navatar';

const AdminLogin = () => {
    const props = useSpring({ opacity: 1, from: { opacity: -0} });

  const navigate = useNavigate();
  const {register,handleSubmit} = useForm();
  const submitLogin = (data) => {
    console.log(data);
    axios.post('https://bloodbankserver.onrender.com/admin/login',data).then((res) => {
      localStorage.setItem("authenticated", true);
      localStorage.setItem("token",res.data.token);
      localStorage.setItem("adminName",res.data.admin.adminName);
      console.log(res.data.token.adminEmail);
      console.log(res);
      navigate('/admin/dashboard');
  }).catch((err) => {
    console.log(err);
  })
  }


  return (
    <div>
      <Navatar />
    <animated.div style={props}>
    <div className='login-form-main-div center'>
      <br></br><br></br><br></br><br></br>
      <form>
        <div className='login-text-box-main'>
          <TextField className='login-text-box' name="adminEmail" {...register('adminEmail')} type='email' id="email" label="E-mail" variant="outlined" required />
        </div>
        <div className='login-text-box-main'>
          <TextField className='login-text-box' name="adminPassword" {...register('adminPassword')} type='password' id="password" label="Password" variant="outlined" required />
        </div>
        <div className='login-text-box-main'>
        <Button type='submit' className='login-page-button' variant="contained" style={{fontWeight:"bold"}} onClick={handleSubmit(submitLogin)}>Login</Button>
        </div>
      </form>
    </div>
    </animated.div>
    </div>
  )
}

export default AdminLogin
