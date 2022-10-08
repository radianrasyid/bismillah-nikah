import React from 'react'
import { Row, Col, } from "react-bootstrap";
import { FormControl, useFormControl, OutlinedInput, FormHelperText, Stack, Button, styled } from '@mui/material';
import umrohImage from "../assets/illustrations/umrohimage.png"
import { Link } from 'react-router-dom';
import StyledSubmitButton from '../components/buttonSubmit';
import axios from 'axios';
axios.defaults.headers = true;

// const StyledSubmitButton = styled(Button)({
//     '&:hover':{
//         backgroundColor: "#3C6654",
//         color: "#FFFFFF",
//         boxShadow: "none"
//     }
// })


export default function Register() {
    
    // FORM STATES
    const [firstName, setFirstName] = React.useState(null);
    const [lastName, setLastName] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [phoneNumber, setPhoneNumber] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [confirmPass, setConfirmPass] = React.useState(null);

    const validate = () => {
        if(password == confirmPass){
            return true;
        }else{
            return false;
        }
    }

    const onSubmit = async(e) => {
        e.preventDefault();

        const valid = validate();

        if(valid){
            console.log(valid);
            // await axios.post("http://localhost:8080/api/v1/user", {
            //     firstName,
            //     lastName,
            //     email,
            //     phoneNumber,
            //     password
            // }, { withCredentials: true })
            await fetch("http://localhost:8000/api/v1/user", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    password
                })
            })
        }else if(valid == false){
            console.log(valid);
            return alert("GAGAL MEMBUAT AKUN")
        }
    }

    const fetchData = async() => {
        await axios.get("http://localhost:8000")
    }

    React.useEffect(() => {
        fetchData()
    }, [])

  return (
    <div className='register-page'>
        <div className='register-paper'>
            <div className='column-register left'>
                <div>
                    <h4 className='register-words'>Halo,</h4>
                    <h4 className='register-words' style={{ marginTop: "-0.8rem"}}>Ayo Daftarkan Akunmu</h4>
                </div>
                <div className='registrasi-image'>
                    <img src={umrohImage} />
                </div>
            </div>
            <div className='column-register right'>
                <Row>
                    <Col>
                        <div className='mb-3'>
                            <p className='input-label-text'>Nama Depan</p>
                            <FormControl className='no-border' variant='standard' fullWidth>
                                <OutlinedInput placeholder='John' className='input-textfield' onChange={(e) => setFirstName(e.target.value)} />
                            </FormControl>
                        </div>
                    </Col>
                    <Col>
                        <div className='mb-3'>
                            <p className='input-label-text'>Nama Belakang</p>
                            <FormControl className='no-border' variant='standard' fullWidth>
                                <OutlinedInput placeholder='John' className='input-textfield' onChange={(e) => setLastName(e.target.value)} />
                            </FormControl>
                        </div>
                    </Col>
                </Row>
                <div className='mb-3'>
                    <p className='input-label-text'>Email</p>
                    <FormControl className='no-border' variant='standard' fullWidth>
                        <OutlinedInput type='email' placeholder='johndoe@gmail.com' className='input-textfield' onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>
                </div>
                <div className='mb-3'>
                    <p className='input-label-text'>Nomor Telepon</p>
                    <FormControl className='no-border' variant='standard' fullWidth>
                        <OutlinedInput type='text' placeholder='08XXXXXXXXXXXX' className='input-textfield' onChange={(e) => setPhoneNumber(e.target.value)} />
                    </FormControl>
                </div>
                <div className='mb-3'>
                    <p className='input-label-text'>Kata Sandi</p>
                    <FormControl className='no-border' variant='standard' fullWidth>
                        <OutlinedInput type='password' placeholder='password' className='input-textfield' onChange={(e) => {
                            setPassword(e.target.value)
                        }}/>
                    </FormControl>
                </div>
                <div className='mb-3'>
                    <p className='input-label-text'>Konfirmasi Kata Sandi</p>
                    <FormControl className='no-border' variant='standard' fullWidth>
                        <OutlinedInput type='password' placeholder='confirm password' className='input-textfield' onChange={(e) => {
                            setConfirmPass(e.target.value)
                        }} />
                    </FormControl>
                </div>
                <div>
                    <StyledSubmitButton variant='contained' type="button" className='button-material submit-btn' fullWidth onClick={onSubmit}>
                        Daftar
                    </StyledSubmitButton>
                    <div className='text-center'>
                        <p className='footnote mt-1'>Sudah memiliki akun?</p>
                        <Link to={"/login"} className="text-decoration-none">
                            <p className='footnote' style={{ marginTop: "-1rem" }}>Log in</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
