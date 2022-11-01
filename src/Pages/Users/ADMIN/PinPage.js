import React from 'react'
import TableRequest from './components/TableRequest'
import TableRequestPin from './components/TableRequestPin';
import { Row, Col, Form } from "react-bootstrap"
import { FormControl, OutlinedInput, Autocomplete, TextField, Stack, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const userRoles = [
  {
    id: 1,
    value: 2,
    nama: "Leader"
  },
  {
    id: 2,
    value: 3,
    nama: "Member"
  },
]

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PinPage() {

  const currentUser = useSelector((state) => state.auth);
  const [codeList, setCodeList] = React.useState([])
  const [userRole, setUserRole] = React.useState(null);
  const [codeId, setCodeId] = React.useState(null);
  const [userId, setUserId] = React.useState(null);
  const [userName, setUserName] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const [leaderId, setLeaderId] = React.useState(null);
  const [leaderName, setLeaderName] = React.useState(null);
  const [pinAmount, setPinAmount] = React.useState(null);
  const [agreement, setAgreement] = React.useState(null);

  const [users, setUser] = React.useState([]);
  const [leaders, setLeaders] = React.useState([]);
  const [openUpgrade, setOpenUpgrade] = React.useState(false);
  const [openPin, setOpenPin] = React.useState(false)

  const handleOpenUpgrade = () => setOpenUpgrade(true);
  const handleCloseUpgrade = () => setOpenUpgrade(false);

  const handleOpenPin = () => setOpenPin(true);
  const handleClosePin = () => setOpenPin(false);
  
  const fetchData = async(e) => {
    setLoading(true)
    await fetch("http://localhost:8000/api/v1/user/getall", {
      method: "GET",
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${currentUser.token}`
      }
    }).then(async(res) => {
      let hasil = await res.json();
      let hasilData = hasil.data;
      let final = await hasilData.filter((item) => {
        if(item.userRole !== 1){
          return item
        }
      })
      setUser(final);
    })

    await fetch("http://localhost:8000/api/v1/codes", {
      method: "GET",
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${currentUser.token}`
      }
    }).then(async(res) => {
      let hasil = await res.json();
      let hasilData = hasil.data;
      setCodeList(hasilData);
    })

    await fetch("http://localhost:8000/api/v1/leaders", {
      method: "GET",
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${currentUser.token}`
      }
    }).then(async(res) => {
      let hasil = await res.json();
      let hasilData = hasil.data;
      setLeaders(hasilData);
    })
    setLoading(false)
  }

  const upgradeRole = async(e) => {
    setLoading(true)
    await fetch("http://localhost:8000/api/v3/user/update/role", {
      method: "PATCH",
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${currentUser.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_role: userRole,
        code_id: codeId,
        user_id: userId
      })
    })
    setLoading(false)
  }

  const createPin = async(e) => {
    if(agreement === "Leader Telah Menyetujui"){
      await fetch("http://localhost:8000/api/v2/create/pin", {
      method: "POST",
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${currentUser.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: leaderId,
        amount: pinAmount
      })
    })
    }else if(agreement == null || agreement !== "Leader Telah Menyetujui"){
      window.alert("Tuliskan Persetujuan Anda")
    }
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
        <div className='mb-3'>
          <Row>
            <Col className='table-container'>
              <div className='text-center'>
                <p className='pp-addleader-title'>Upgrade user menjadi leader</p>
              </div>
              <hr></hr>
              <div>
                <div className='mb-3'>
                    <p className='input-label-text'>Nama User</p>
                    <FormControl className='no-border' variant='standard' fullWidth>
                        <Autocomplete
                            options={users}
                            getOptionLabel={option => `${option.firstName} ${option.lastName}`}
                            renderInput={params => (
                                <TextField {...params} placeholder={"Nama User"} variant="outlined" />
                            )}
                            onChange={(e, newValue) => {
                              setUserId(newValue.id);
                              setUserName(`${newValue.firstName} ${newValue.lastName}`)
                            }}
                            className="hms-small-textfield mb-3"
                        />
                    </FormControl>
                </div>
                <div className='mb-3'>
                    <p className='input-label-text'>Code</p>
                    <FormControl className='no-border' variant='standard' fullWidth>
                        <Autocomplete
                            options={codeList}
                            getOptionLabel={option => `${option.code}`}
                            renderInput={params => (
                                <TextField {...params} placeholder={"Nama User"} variant="outlined" />
                            )}
                            onChange={(e, newValue) => {
                              setCodeId(newValue.id);
                            }}
                            className="hms-small-textfield mb-3"
                        />
                    </FormControl>
                </div>
                <div className='mb-3'>
                    <p className='input-label-text'>Upgrade Menjadi</p>
                    <FormControl className='no-border' variant='standard' fullWidth>
                        <Autocomplete
                            options={userRoles}
                            getOptionLabel={option => `${option.nama}`}
                            renderInput={params => (
                                <TextField {...params} placeholder={"Nama User"} variant="outlined" />
                            )}
                            onChange={(e, newValue) => {
                              setUserRole(newValue.value);
                            }}
                            className="hms-small-textfield mb-3"
                        />
                    </FormControl>
                </div>

                <div style={{ display: 'flex', justifyContent: 'right' }}>
                  <Stack direction={"row"} spacing={2}>
                      <div>
                        <Button variant="contained" size="small" type="button"
                        sx={{
                          fontWeight: "600",
                          backgroundColor: "rgb(199, 74, 74)"
                        }}
                        >
                          Reset
                        </Button>
                      </div>
                      <div>
                        <LoadingButton variant='contained' loading={loading == true ? true : false} size="small"
                        sx={{
                          fontWeight: "600",
                          backgroundColor: "rgba(65, 125, 122, 1)"
                        }}
                        onClick={handleOpenUpgrade}
                        >
                          Upgrade
                        </LoadingButton>
                      </div>
                  </Stack>
                </div>
                <Dialog
                  open={openUpgrade}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleCloseUpgrade}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle>{"Apakah Anda yakin ingin melakukan upgrade role"}</DialogTitle>
                  <DialogContent>
                    <div className='mb-3'>
                        <p className='input-label-text' style={{ fontWeight: "600", fontSize: "18px" }}>Nama User</p>
                        <FormControl className='no-border' variant='standard' fullWidth>
                            <OutlinedInput type='email' value={userName !== null ? userName : "John Doe"} readOnly className='input-textfield' />
                        </FormControl>
                    </div>
                    <div className='mb-3'>
                        <p className='input-label-text' style={{ fontWeight: "600", fontSize: "18px" }}>Menjadi Role</p>
                        <FormControl className='no-border' variant='standard' fullWidth>
                            <OutlinedInput type='email' value={userRole == 2 ? "Admin" : "Member"} readOnly className='input-textfield' />
                        </FormControl>
                    </div>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseUpgrade}
                    variant="contained"
                    sx={{
                      fontWeight: "600",
                      backgroundColor: "rgb(199, 74, 74)"
                    }}
                    >Disagree</Button>
                    <Button onClick={(e) => {
                      e.preventDefault();
                      upgradeRole()
                    }}
                    variant="contained"
                    sx={{
                      fontWeight: "600",
                    }}
                    >Agree</Button>
                  </DialogActions>
                </Dialog>
              </div>
            </Col>
            <Col className='table-container' style={{ marginLeft: "1rem" }}>
            <div className='text-center'>
                <p className='pp-addleader-title'>Buat Pin Leader</p>
              </div>
              <hr></hr>
              <div>
                <div className='mb-3'>
                    <p className='input-label-text'>Nama Leader</p>
                    <FormControl className='no-border' variant='standard' fullWidth>
                        <Autocomplete
                            options={leaders}
                            getOptionLabel={option => `${option.firstName} ${option.lastName}`}
                            renderInput={params => (
                                <TextField {...params} placeholder={"Nama User"} variant="outlined" />
                            )}
                            onChange={(e, newValue) => {
                              setLeaderId(newValue.id);
                              setLeaderName(`${newValue.firstName} ${newValue.lastName}`)
                            }}
                            className="hms-small-textfield mb-3"
                        />
                    </FormControl>
                </div>
                <div className='mb-3'>
                    <p className='input-label-text'>Jumlah Pin</p>
                    <FormControl className='no-border' variant='standard' fullWidth>
                        <OutlinedInput type='text' placeholder='20' className='input-textfield' onChange={(e) => setPinAmount(Number(e.target.value))} />
                    </FormControl>
                </div>

                <div style={{ display: 'flex', justifyContent: 'right' }}>
                  <Stack direction={"row"} spacing={2}>
                      <div>
                        <Button variant="contained" size="small" type="button"
                        sx={{
                          fontWeight: "600",
                          backgroundColor: "rgb(199, 74, 74)"
                        }}
                        >
                          Reset
                        </Button>
                      </div>
                      <div>
                        <LoadingButton variant='contained' loading={loading == true ? true : false} size="small"
                        sx={{
                          fontWeight: "600",
                          backgroundColor: "rgba(65, 125, 122, 1)"
                        }}
                        onClick={handleOpenPin}
                        >
                          Lanjutkan
                        </LoadingButton>
                      </div>
                  </Stack>
                </div>
                <Dialog
                  open={openPin}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClosePin}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle>{"Apakah Anda yakin ingin melakukan upgrade role"}</DialogTitle>
                  <DialogContent>
                    <div className='mb-3'>
                        <p className='input-label-text' style={{ fontWeight: "600", fontSize: "18px" }}>Nama Leader</p>
                        <FormControl className='no-border' variant='standard' fullWidth>
                            <OutlinedInput type='email' value={leaderName !== null ? leaderName : "John Doe"} readOnly className='input-textfield' />
                        </FormControl>
                    </div>
                    <div className='mb-3'>
                        <p className='input-label-text' style={{ fontWeight: "600", fontSize: "18px" }}>Jumlah Pin</p>
                        <FormControl className='no-border' variant='standard' fullWidth>
                            <OutlinedInput type='email' value={pinAmount !== null ? pinAmount : "20"} readOnly className='input-textfield' />
                        </FormControl>
                    </div>
                    <div>
                        <div className='text-center'>
                          <p style={{ fontWeight: "700", fontSize: "20px" }}>Perhatian</p>
                        </div>
                        <div>
                          <ul>
                            <li><small>Leader harus memiliki komitmen untuk menjual semua pin kepada anggota</small></li>
                            <li><small>Leader harus bersedia untuk menerima sanksi atau denda apabila pin tidak terjual habis dalam waktu yang sudah ditentukan</small></li>
                          </ul>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <p className='input-label-text'>Ketik <b>Leader Telah Menyetujui</b> untuk melanjutkan</p>
                        <FormControl className='no-border' variant='standard' fullWidth>
                            <OutlinedInput className='input-textfield' onChange={(e) => setAgreement(e.target.value)}/>
                        </FormControl>
                    </div>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClosePin}
                    variant="contained"
                    sx={{
                      fontWeight: "600",
                      backgroundColor: "rgb(199, 74, 74)"
                    }}
                    >Disagree</Button>
                    <Button onClick={(e) => {
                      e.preventDefault();
                      createPin()
                    }}
                    variant="contained"
                    sx={{
                      fontWeight: "600",
                    }}
                    >Agree</Button>
                  </DialogActions>
                </Dialog>
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          <Col>
            <div className='table-container'>
              <TableRequest/>
            </div>
          </Col>
          <Col>
            <div className='table-container'>
              <TableRequestPin/>
            </div>
          </Col>
        </Row>
    </div>
  )
}
