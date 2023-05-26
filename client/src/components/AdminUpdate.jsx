import React from 'react';
import './css/login.css';
import { Button, TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import Navatar from './Navatar';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AdminUpdate = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });

    const { register, handleSubmit } = useForm()
    const location = useLocation();
    console.log('location', location)
    const user = location.state.user
    console.log(user.userfName)
    const handleUpdate = (data) => {
        data = { ...data, _id: user._id }
        console.log(`request data is: ${data._id}`)
        axios.post('http://localhost:5000/verified/request/update', data).then((res) => {
            console.log(res)
            alert('Request Updated Successfully')
        })


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
                                    <Button type='submit' className='login-page-button' variant="contained" style={{ fontWeight: "bold" }} onClick={handleSubmit(handleUpdate)}>Signup</Button>
                                </div>
                                <div className='login-text-box-main'>
                                </div>
                            </form>
                        </div>
                    </animated.div>
                </div>
            </div>
        )
    }
}

    export default AdminUpdate
