import React from 'react'
import { Row, Col, } from "react-bootstrap";
import { FormControl, useFormControl, OutlinedInput, FormHelperText, Stack, Button, styled, Box } from '@mui/material';
import { Stepper, Step, StepButton, Typography, StepLabel } from "@mui/material"
// import StyledSubmitButton from '../components/buttonSubmit';
import umrohImage from "../assets/illustrations/umrohimage.png"
import { Link, useParams, useSearchParams } from 'react-router-dom';
import StyledSubmitButton from '../components/buttonSubmit';
import logo from "../assets/images/logo-hrbs.jpg";
import axios from 'axios';
axios.defaults.headers = true;

// const StyledSubmitButton = styled(Button)({
//     '&:hover':{
//         backgroundColor: "#3C6654",
//         color: "#FFFFFF",
//         boxShadow: "none"
//     }
// })

const steps = ["Pertama", "Kedua", "Ketiga"]


export default function RegisterRef() {

    const { id } = useParams()

    // PAGE STATES
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    
    // FORM STATES
    const [firstName, setFirstName] = React.useState(null);
    const [lastName, setLastName] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [phoneNumber, setPhoneNumber] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [confirmPass, setConfirmPass] = React.useState(null);
    const [street, setStreet] = React.useState(null);
    const [district, setDistrict] = React.useState(null);
    const [city, setCity] = React.useState(null);
    const [province, setProvince] = React.useState(null);
    const [dob, setDob] = React.useState(null);
    const [age, setAge] = React.useState(null);
    const [nik, setNik] = React.useState(null);
    const [noKK, setNoKK] = React.useState(null);
    const [noPass, setNoPass] = React.useState(null);
    const [ktpImage, setKtpImage] = React.useState(null);
    const [kkImage, setKkImage] = React.useState(null);
    const [passImage, setPassImage] = React.useState(null);
    const {referralCode, setReferralCode} = React.useState(null);

    const validate = () => {
        if(password == confirmPass){
            return true;
        }else{
            return false;
        }
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        console.log();
        await fetch("https://umrohwebsite.herokuapp.com/api/v1/user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                nik: nik,
                passportNumber: noPass,
                familyNumber: noKK,
                dob: dob,
                age: age,
                email: email,
                password: password,
                street: street,
                district: district,
                city: city,
                province: province,
                referralCode: id,
            })
        })

        const formData = new FormData();
        formData.append("email", email)
        formData.append("nik", nik)
        formData.append("image_id", ktpImage)
        await fetch("https://umrohwebsite.herokuapp.com/api/v1/ktpimage", {
            method: 'PATCH',
            body: formData,
        })

        const formData1 = new FormData();
        formData1.append("email", email)
        formData1.append("nik", nik)
        formData1.append("image_passport", passImage)
        await fetch("https://umrohwebsite.herokuapp.com/api/v1/passportimage", {
            method: 'PATCH',
            body: formData1,
        })

        const formData2 = new FormData();
        formData2.append("email", email)
        formData2.append("nik", nik)
        formData2.append("image_family", kkImage)
        await fetch("https://umrohwebsite.herokuapp.com/api/v1/familyimage", {
            method: 'PATCH',
            body: formData2,
        })

    }

    const onPatch = async(e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("email", email)
        formData.append("nik", nik)
        formData.append("image_id", ktpImage)
        await fetch("https://umrohwebsite.herokuapp.com/api/v1/ktpimage", {
            method: 'PATCH',
            body: formData,
        })
    }

    const onPatchPassport = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email)
        formData.append("nik", nik)
        formData.append("image_passport", passImage)
        await fetch("https://umrohwebsite.herokuapp.com/api/v1/passportimage", {
            method: 'PATCH',
            body: formData,
        })
    }

    const onPatchFamily = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email)
        formData.append("nik", nik)
        formData.append("image_passport", kkImage)
        await fetch("https://umrohwebsite.herokuapp.com/api/v1/familyimage", {
            method: 'PATCH',
            body: formData,
        })
    }

    const fetchData = async() => {
        await axios.get("https://umrohwebsite.herokuapp.com")
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    console.log("INI DATA PARAMS", id);

  return (
    <div className='register-page'>
        <img src={logo} className="logo-hrbs" style={{ width: "5rem", height: "5rem", borderRadius: "50%" }} />
        <div className='register-paper'>
            <div className='column-register left'>
                <div>
                    <h4 className='register-words'>Halo,</h4>
                    <h4 className='register-words' style={{ marginTop: "-0.8rem", marginLeft: "5rem" }}>Ayo Daftarkan Akunmu</h4>
                </div>
                <div className='registrasi-image'>
                    <img src={umrohImage} />
                </div>
            </div>
            <div className='column-register right'>
            <Stepper activeStep={activeStep} className="mb-4">
                {
                steps.map((label, index) => {
                const stepProps = {};
                if (isStepSkipped(index)) {
                    stepProps.completed = false;
                }
                return (
                    <Step key={label} {...stepProps}>
                    <StepLabel>{label}</StepLabel>
                    </Step>
                );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={onSubmit}>Reset</Button>
                </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                {
                    activeStep == 0 ? (
                        <div className='p-2'>
                            <Row>
                                <Col>
                                    <div className='mb-3'>
                                        <p className='input-label-text'>Nama Depan</p>
                                        <FormControl className='no-border' variant='standard' fullWidth>
                                            <OutlinedInput placeholder={firstName == null ? "John" : firstName} className='input-textfield' onChange={(e) => setFirstName(e.target.value)} />
                                        </FormControl>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='mb-3'>
                                        <p className='input-label-text'>Nama Belakang</p>
                                        <FormControl className='no-border' variant='standard' fullWidth>
                                            <OutlinedInput placeholder={lastName == null ? "Doe" : lastName} className='input-textfield' onChange={(e) => setLastName(e.target.value)} />
                                        </FormControl>
                                    </div>
                                </Col>
                            </Row>
                            <div className='mb-3'>
                                <p className='input-label-text'>Email</p>
                                <FormControl className='no-border' variant='standard' fullWidth>
                                    <OutlinedInput type='email' placeholder={email == null ? "johndoe@gmail.com" : email} className='input-textfield' onChange={(e) => setEmail(e.target.value)} />
                                </FormControl>
                            </div>
                            <div className='mb-3'>
                                <p className='input-label-text'>Nomor Telepon</p>
                                <FormControl className='no-border' variant='standard' fullWidth>
                                    <OutlinedInput type='text' placeholder={phoneNumber == null ? "08XXXXXXXXX" : phoneNumber} className='input-textfield' onChange={(e) => setPhoneNumber("+62" + (e.target.value.substr(0,1) == "0" ? e.target.value.substr(1) : e.target.value))} />
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
                        </div>
                    ) : (
                        <>
                            {
                                activeStep == 1 ? (
                                    <div>
                                        <div className='mb-3'>
                                            <p className='input-label-text'>Alamat</p>
                                            <FormControl className='no-border' variant='standard' fullWidth>
                                                <OutlinedInput type='text' placeholder={street == null ? "Jl Adi Sucipto" : street} className='input-textfield' onChange={(e) => setStreet(e.target.value)} />
                                            </FormControl>
                                        </div>
                                        <div className='mb-3'>
                                            <p className='input-label-text'>Kecamatan</p>
                                            <FormControl className='no-border' variant='standard' fullWidth>
                                                <OutlinedInput type='text' placeholder={district == null ? "Menteng" : district} className='input-textfield' onChange={(e) => setDistrict(e.target.value)} />
                                            </FormControl>
                                        </div>
                                        <div className='mb-3'>
                                            <p className='input-label-text'>Kota</p>
                                            <FormControl className='no-border' variant='standard' fullWidth>
                                                <OutlinedInput type='text' placeholder={city == null ? "Jakarta Pusat" : city} className='input-textfield' onChange={(e) => {
                                                    setCity(e.target.value)
                                                }}/>
                                            </FormControl>
                                        </div>
                                        <div className='mb-3'>
                                            <p className='input-label-text'>Provinsi</p>
                                            <FormControl className='no-border' variant='standard' fullWidth>
                                                <OutlinedInput type='text' placeholder={province == null ? "DKI Jakarta" : province} className='input-textfield' onChange={(e) => {
                                                    setProvince(e.target.value)
                                                }} />
                                            </FormControl>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {
                                            activeStep == 2 ? (
                                                <div>
                                                    <Row className='mb-3'>
                                                        <Col>
                                                            <div className='mb-3'>
                                                                <p className='input-label-text'>Tanggal Lahir</p>
                                                                <FormControl className='no-border' variant='standard' fullWidth>
                                                                    <OutlinedInput type='date' placeholder={dob == null ? "12/12/2000" : dob} className='input-textfield' onChange={(e) => setDob(e.target.value)} />
                                                                </FormControl>
                                                            </div>
                                                        </Col>
                                                        <Col>
                                                            <div className='mb-3'>
                                                                <p className='input-label-text'>Umur</p>
                                                                <FormControl className='no-border' variant='standard' fullWidth>
                                                                    <OutlinedInput type='text' placeholder={age == null ? "24" : age} className='input-textfield' onChange={(e) => setAge(Number(e.target.value))} />
                                                                </FormControl>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row className='mb-3'>
                                                        <Col>
                                                            <div className='mb-3'>
                                                                <p className='input-label-text'>NIK</p>
                                                                <FormControl className='no-border' variant='standard' fullWidth>
                                                                    <OutlinedInput type='text' placeholder={nik == null ? "XXXXXXXXXXXXXXXXX" : nik} className='input-textfield' onChange={(e) => setNik(e.target.value)} />
                                                                </FormControl>
                                                            </div>
                                                        </Col>
                                                        <Col>
                                                            <div className='mb-3'>
                                                                <p className='input-label-text'>Nomor Kartu Keluarga</p>
                                                                <FormControl className='no-border' variant='standard' fullWidth>
                                                                    <OutlinedInput type='text' placeholder={noKK == null ? "XXXXXXXXXXXXXX" : noKK} className='input-textfield' onChange={(e) => setNoKK(e.target.value)} />
                                                                </FormControl>
                                                            </div>
                                                        </Col>
                                                        <Col>
                                                            <div className='mb-3'>
                                                                <p className='input-label-text'>Nomor Passport</p>
                                                                <FormControl className='no-border' variant='standard' fullWidth>
                                                                    <OutlinedInput type='text' placeholder={noPass == null ? "XXXXXXXXXXXXXXXXXXXX" : noPass} className='input-textfield' onChange={(e) => setNoPass(e.target.value)} />
                                                                </FormControl>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row className='mb-3'>
                                                        <Col>
                                                            <div className='mb-3'>
                                                                <p className='input-label-text'>KTP</p>
                                                                <FormControl className='no-border' variant='standard' fullWidth>
                                                                    <OutlinedInput type='file' placeholder='08XXXXXXXXXXXX' className='input-textfield' onChange={(e) => setKtpImage(e.target.files[0])} />
                                                                </FormControl>
                                                            </div>
                                                        </Col>
                                                        <Col>
                                                            <div className='mb-3'>
                                                                <p className='input-label-text'>Kartu Keluarga</p>
                                                                <FormControl className='no-border' variant='standard' fullWidth>
                                                                    <OutlinedInput type='file' placeholder='08XXXXXXXXXXXX' className='input-textfield' onChange={(e) => setKkImage(e.target.files[0])} />
                                                                </FormControl>
                                                            </div>
                                                        </Col>
                                                        <Col>
                                                            <div className='mb-3'>
                                                                <p className='input-label-text'>Passport</p>
                                                                <FormControl className='no-border' variant='standard' fullWidth>
                                                                    <OutlinedInput type='file' placeholder='08XXXXXXXXXXXX' className='input-textfield' onChange={(e) => setPassImage(e.target.files[0])} />
                                                                </FormControl>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <div className='mb-3'>
                                                        <div className='mb-3'>
                                                            <p className='input-label-text'>Kode Referral</p>
                                                            <FormControl className='no-border' variant='standard'>
                                                                <OutlinedInput type='text' placeholder='XXXXXX' value={id} className='input-textfield' readOnly />
                                                            </FormControl>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <></>
                                            )
                                        }
                                    </>
                                )
                            }
                        </>
                    )
                }
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    {/* <Button
                    color="inherit"
                    variant='contained'
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1, textTransform: "none" }}
                    >
                    Back
                    </Button> */}
                    <StyledSubmitButton
                    color="inherit"
                    variant='contained'
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1, textTransform: "none" }}
                    >
                        Back
                    </StyledSubmitButton>
                    <Box sx={{ flex: '1 1 auto', textTransform: "none" }} />
                    {isStepOptional(activeStep) && (
                    <div></div>
                    )}
                    {/* <Button onClick={handleNext} sx={{ textTransform: "none" }} variant="contained">
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button> */}
                    <StyledSubmitButton onClick={handleNext} sx={{ textTransform: "none", fontWeight: "600" }} variant="contained">{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</StyledSubmitButton>
                </Box>
                </React.Fragment>
            )}
                {/* <Row>
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
                </div> */}
            </div>
        </div>
    </div>
  )
}
