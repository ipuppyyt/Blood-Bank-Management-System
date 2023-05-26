import React from 'react';
import './css/login.css';
import { Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import Navatar from './Navatar';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AdminUpdate = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });

    const navigate = useNavigate();
    
    const { register, handleSubmit } = useForm();
  const submitSignup = (data) => {
          if (document.getElementById('userPassword').value !== document.getElementById('userConfirmPassword').value) {
            console.log(document.getElementById('userPassword').value);
            console.log(document.getElementById('userConfirmPassword').value);
            alert("Passwords do not match");
          }
          else {
            console.log(data);
            axios.post('https://bloodbankserver.onrender.com/user/create', data).then((res) => {
            console.log(res.data); 
            if (res.data.success === true)
              {
              navigate('/login');
              }
              else{
              alert(res.data);
              }
            }).catch((err) => {
              alert("Email already exists.");
              console.log(err);
            })
        }
      }

  return (
    <div>
            <div>
        <Navatar />
        <animated.div style={props}>
          <div className='signup-form-main-div center'>
            <br></br><br></br><br></br><br></br>
            <form>
              <div className='login-text-box-main'>
                <TextField className='login-text-box' type='text' name='userName' {...register('userName')} id="userName" label="Full Name" variant="outlined" required />&nbsp;&nbsp;&nbsp;&nbsp;
                <TextField className='login-text-box' type='email' name='userEmail' {...register('userEmail')} id="userEmail" label="E-mail" variant="outlined" required />
              </div>
              <div className='login-text-box-main'>
                <TextField className='login-text-box' type='password' name='userPassword' {...register('userPassword')} id="userPassword" label="Password" variant="outlined" required />&nbsp;&nbsp;&nbsp;&nbsp;
                <TextField className='login-text-box' type='password' name='userConfirmPassword' {...register('userConfirmPassword')} id="userConfirmPassword" label="Retype Password" variant="outlined" required />
              </div>
              <div className='login-text-box-main'>
                <Button type='submit' className='login-page-button' variant="contained" style={{ fontWeight: "bold" }} onClick={handleSubmit(submitSignup)}>Signup</Button>
              </div>
              <div className='login-text-box-main'>
                <Link to='/login' className='login-page-link' class="wanttosignup">Already have an account? Login</Link>
              </div>
            </form>
          </div>
        </animated.div>
      </div>
    </div>
  )
}

export default AdminUpdate
