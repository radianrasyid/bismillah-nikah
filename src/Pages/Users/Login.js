
import React from 'react'
import { Row, Col } from "react-bootstrap";
import { Button, FormControl, OutlinedInput } from "@mui/material";
import StyledSubmitButton from '../components/buttonSubmit';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {

    const direct = useNavigate();

    // FORM STATES
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    const onSubmit = async(e) => {
        e.preventDefault()
        if(email !== null && password !== null){
            await fetch("http://localhost:8000/api/v1/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
        }else{
            alert("email atau password salah")
        }
    }

  return (
    <div className='login-page'>
        <div className='login-paper'>
            <div className='login-card'>
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