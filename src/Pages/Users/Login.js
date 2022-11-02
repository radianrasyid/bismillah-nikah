
import React from 'react'
import { Row, Col } from "react-bootstrap";
import { Button, FormControl, OutlinedInput } from "@mui/material";
import StyledSubmitButton from '../components/buttonSubmit';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/images/logo-hrbs.jpg";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setCredentials } from '../../redux/feature/auth/authSlice';

export default function Login() {

    const direct = useNavigate();
    const dispatch = useDispatch();

    // FORM STATES
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    const onSubmit = async(e) => {
        e.preventDefault()
        if(email !== null && password !== null){
            await fetch("https://umrohwebsite.herokuapp.com/api/v1/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            }).then(async (response) => {
                let hasil = await response.json();
                if(hasil.token){
                    dispatch(setCredentials({
                        id: hasil.id,
                        user: hasil.user,
                        accessToken: hasil.token,
                        image: hasil.image,
                        role: hasil.userRole,
                        referral: hasil.referralCode,
                        leader_code: hasil.leaderCode,
                        program_id: hasil.programId
                    }))
                    if(hasil.userRole == 1){
                        return direct("/admin-dashboard")
                    }else if(hasil.userRole !== 1){
                        return direct("/dashboard")
                    }
                }
            })
        }else{
            alert("email atau password salah")
        }
    }

  return (
    <div className='login-page'>
        <img src={logo} className="logo-hrbs" style={{ width: "10rem", height: "10rem", borderRadius: "50%" }} />
        <div className='login-paper'>
            <div className='login-card'>
                <div className='text-center mb-2'>
                </div>
                <div className='text-center'>
                    <h4>Login</h4>
                </div>
                <div className='login-component'>
                    <div className='mb-3'>
                        <p className='input-label-text'>Email/Username</p>
                        <FormControl className='no-border' variant='standard' fullWidth>
                            <OutlinedInput type='email' placeholder='johndoe@gmail.com' className='input-textfield' onChange={(e) => setEmail(e.target.value)} />
                        </FormControl>
                    </div>
                    <div className='mb-3'>
                        <p className='input-label-text'>Password</p>
                        <FormControl className='no-border' variant='standard' fullWidth>
                            <OutlinedInput type='password' placeholder='********' className='input-textfield' onChange={(e) => setPassword(e.target.value)} />
                        </FormControl>
                    </div>
                    <div className='mb-5'>
                        <StyledSubmitButton variant='contained' type="button" className='button-material submit-btn' fullWidth onClick={onSubmit}>
                            Login
                        </StyledSubmitButton>
                        <div className='text-center mt-3'>
                            <p className='footnote mt-1'>Belum memiliki akun?</p>
                            <Link to={"/register"} className="text-decoration-none">
                                <p className='footnote' style={{ marginTop: "-1rem" }}>Daftar Sekarang</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
