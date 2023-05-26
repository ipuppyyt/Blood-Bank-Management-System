import React from 'react';
import './css/login.css';
import { Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import Navatar from './Navatar';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Login = () => {
  const props = useSpring({ opacity: 1, from: { opacity: -0} });
  const navigate = useNavigate();

  const {register,handleSubmit} = useForm();
  const submitLogin = (data) => {
    console.log(data);
    axios.post('https://bloodbankserver.onrender.com/user/login',data).then((res) => {
      localStorage.setItem("authenticated", true);
      localStorage.setItem("token",res.data.token);
      localStorage.setItem("userName",res.data.user.userName);
      console.log(res.data.token.userEmail);
      console.log(res);
      navigate('/user/dashboard');
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
          <TextField className='login-text-box' name="userEmail" {...register('userEmail')} type='email' id="email" label="E-mail" variant="outlined" required />
        </div>
        <div className='login-text-box-main'>
          <TextField className='login-text-box' name="userPassword" {...register('userPassword')} type='password' id="password" label="Password" variant="outlined" required />
        </div>
        <div className='login-text-box-main'>
        <Button type='submit' className='login-page-button' variant="contained" style={{fontWeight:"bold"}} onClick={handleSubmit(submitLogin)}>Login</Button>
        </div>
        <div className='login-text-box-main'>
        <Link to='/signup' className='login-page-link' class="wanttosignup">Don't have an account? Signup</Link>
        </div>
      </form>
    </div>
    </animated.div>
    </div>
  )
}

export default Login
