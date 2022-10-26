import React from 'react';
import { Row, Col, ProgressBar } from "react-bootstrap"
import { Button, FormControl, useFormControl, FormHelperText, Fab, Typography, Popover, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import { Autocomplete, TextField, OutlinedInput, Dialog, DialogActions, DialogContent, Slide, DialogTitle } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import hajivektor from "../assetsUser/images/hajivektor.png";
import logo from "../assets/images/logo-hrbs.jpg";
import TableGrupSaya from './components/TableGrupSaya';
import TableReferred from './components/TableReferred';
import { useSelector } from 'react-redux';
import { DiGitPullRequest } from "react-icons/di"
import { TbFileReport } from "react-icons/tb";
import { MdInput } from "react-icons/md";

const Transition = React.forwardRef(function Transition(props, ref) { 
    return <Slide direction='up' ref={ref} {...props} />
})


export default function DashboardUser() {

    let currentUser = useSelector((state) => state.auth)
    const [userData, setUserData] = React.useState(null);
    const [loading, setLoading] = React.useState(null);
    const [program, setProgram] = React.useState(null);
    let [activeChild, setActiveChild] = React.useState(null);
    const [openCreate, setOpenCreate] = React.useState(false);
    const [openLeader, setOpenLeader] = React.useState(false);
    const [openReqPin, setOpenReqPin] = React.useState(false);
    const [openInputPin, setOpenInputPin] = React.useState(false);
    let token = currentUser.token;

    // FORM STATES
    const [amount, setAmount] = React.useState(0);
    const [file, setFile] = React.useState(null);
    const [agreement, setAgreement] = React.useState(null);
    const [pinAmount, setPinAmount] = React.useState(null);

    const [pin, setPin] = React.useState(null);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleOpenCreate = () => setOpenCreate(true);
    const handleCloseCreate = () => setOpenCreate(false);

    const handleOpenLeader = () => setOpenLeader(true);
    const handleCloseLeader = () => setOpenLeader(false);

    const handleOpenReqPin = () => setOpenReqPin(true);
    const handleCloseReqPin = () => setOpenReqPin(false);

    const handleOpenInputPin = () => setOpenInputPin(true);
    const handleCloseInputPin = () => setOpenInputPin(false);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const fetchData = async(e) => {
        setLoading(true)
        await fetch("http://localhost:8000/api/v1/user/whoami", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(async(response) => {
            let hasil = await response.json();
            setUserData(hasil.user);
            let userCurrent = await hasil.user.referrerId;

            let activeMembers = userCurrent.map((item) => {
                if(item.status == 1 && item.currentPayment !== 0){
                    return item;
                }else{
                    return null
                }
            })
            setActiveChild(activeMembers)

            await fetch(`http://localhost:8000/api/v1/program/${hasil.user.ProgramId}`)
            .then(async(res) => {
                let result = await res.json();
                setProgram(result.data);
            })
        })
        setLoading(false)
    }

    const formatRupiah = (money) => {
        return new Intl.NumberFormat('id-ID',
          { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
        ).format(money);
     }

    const createTransaction = async(e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("amount", Number(amount));
        formData.append("image", file)

        await fetch("http://localhost:8000/api/v1/transaction", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${currentUser.token}`
            },
            body: formData
        })
    }

    const createAgreement = async(e) => {
        e.preventDefault();

        if(agreement === "Saya Menyetujui"){
            await fetch("http://localhost:8000/api/v1/user/roleup", {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            })
            return true;
        }else if(agreement !== "Saya Menyetujui"){
            return false
        }
    }

    const requestPin = async(e) => {
        e.preventDefault();

        if(agreement === "Saya Menyetujui"){
            await fetch("http://localhost:8000/api/v1/user/reqpin", {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: pinAmount
                })
            })
            return true;
        }else if(agreement !== "Saya Menyetujui"){
            return false
        }
    }

    const inputPin = async(e) => {
        e.preventDefault();

        if(agreement === "Pin Sudah Benar"){
            await fetch("http://localhost:8000/api/v3/user/pin", {
                method: "PATCH",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    pin: pin
                })
            })
            return true;
        }else if(agreement !== "Pin Sudah Benar"){
            return false
        }
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    console.log("INI MEMBER YANG AKTIF", activeChild);

  if(loading==false){
    return (
        <div>
            <Row className='mb-3'>
                <Col lg={9} md={3}>
                    <div className='dashboard-user-welcome-card'>
                        <Row>
                            <Col lg={7}>
                                <div className='mb-2'>
                                    <p className='dashboard-user-welcome-title'>Welcome,</p>
                                    <p className='dashboard-user-welcome-title' style={{ marginTop: "-1.1rem" }}>{currentUser.user}</p>
                                </div>
                                <div>
                                    {
                                        activeChild[0] == null ? (<small>Anda belum memiliki jamaah aktif.</small>) : (<small>Dapatkan <b>{activeChild.length}</b> lagi untuk mendapatkan 1 free jamaah umroh</small>)
                                    }
                                </div>
                                <div className='progress-container mt-4'>
                                    {
                                        activeChild[0] == null ? (<></>) : (<FormControl fullWidth={true}>
                                            <ProgressBar now={activeChild[0] == null ? 0 : activeChild.length} max={10} min={0} variant="info" />
                                            <FormHelperText style={{ margin: "0", width: "10rem" }}>
                                                <small className='dashboard-user-welcome-info'><b>{userData.referrerId.length}</b> jamaah didapatkan</small>
                                            </FormHelperText>
                                        </FormControl>)
                                    }
                                </div>
                            </Col>
                            <Col style={{ display: "flex", justifyContent: "right" }}>
                                <img src={hajivektor} className="dashboard-user-welcome-img" />
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={3} md={6} className={userData.ProgramId == null && userData.currentPayment == 0 ? "text-center" : ""}>
                    <div className='dashboard-user-program-card'>
                        {
                            userData.ProgramId == null || userData.currentPayment == 0 ? (
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <p style={{ fontWeight: "600", fontSize: "12px", marginTop: "1rem" }}>Anda belum memilih program apapun</p>
                                </div>
                            ) : (
                                <div>
                                    <Row>
                                        <Col lg={3}>
                                            <img src={logo} />
                                        </Col>
                                        <Col>
                                            <p className='dashboard-user-welcome-title'>{program.programName}</p>
                                            <small style={{ marginTop: "-1rem", fontWeight: 600, color: "#828282" }}>{program.programType == 0 || program.programType == 1 ? "Umroh" : "Haji"}</small>
                                        </Col>
                                        <div className='mb-1'>
                                            <small className='dashboard-user-program-text'>{program.programDescription}</small>
                                        </div>
                                    </Row>
                                    <div className='dashboard-user-program-bar'>
                                        <FormControl fullWidth={true}>
                                            <FormHelperText>
                                                <Row>
                                                    <Col lg={8} style={{ padding: "0" }}>
                                                        <small className='dashboard-user-program-text'>Status Pembayaran</small>
                                                    </Col>
                                                    <Col style={{ display: "flex", justifyContent: "right", padding: "0" }}>
                                                        <small className='dashboard-user-program-text'>{Math.ceil((userData.currentPayment/program.price) * 100)}%</small>
                                                    </Col>
                                                </Row>
                                            </FormHelperText>
                                            <ProgressBar className='progress-program' now={userData.currentPayment} max={program.price} min={0} variant="info" />
                                            <FormHelperText sx={{ margin: "0", width: "100%" }}>
                                                <Row>
                                                    <Col>
                                                        <small className='dashboard-user-program-price'>{formatRupiah(userData.currentPayment)} / {formatRupiah(program.price)}</small>
                                                    </Col>
                                                </Row>
                                            </FormHelperText>
                                        </FormControl>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </Col>
            </Row>
    
            <Row>
                <Col className='table-container' style={{ marginRight: "1rem" }}>
                    <p className='table-container-title mb-3'>Grup Saya</p>
                    <div>
                        <TableGrupSaya/>
                    </div>
                </Col>
                <Col className='table-container'>
                    <p className="table-container-title mb-3">Jaringan Saya</p>
                    <div>
                        <TableReferred/>
                    </div>
                </Col>
            </Row>
            <div style={{ display: "flex", justifyContent: "right", alignItems: "flex-end", position: "fixed", bottom: "3rem", right: "3rem", zIndex: 9999 }}>
                <Fab color="primary" aria-label="add" sx={{ zIndex: "9999", }} size="medium" onClick={handleClick}>
                    <AddIcon />
                </Fab>
                <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
            >
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                >
                    <MenuItem onClick={handleOpenLeader}>
                        <ListItemIcon>
                            <DiGitPullRequest style={{ transform: "scale(1.2)", marginRight: "-1rem"}}/>
                        </ListItemIcon>
                        <ListItemText>
                            Menjadi Leader
                        </ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleOpenCreate}>
                        <ListItemIcon>
                            <TbFileReport/>
                        </ListItemIcon>
                        <ListItemText>
                            Transaksi
                        </ListItemText>
                    </MenuItem>
                    {
                        currentUser.role == 2 ? (
                            <div>
                                <MenuItem onClick={handleOpenReqPin}>
                                <ListItemIcon>
                                    <MdInput/>
                                </ListItemIcon>
                                <ListItemText>
                                    Request Pin
                                </ListItemText>
                            </MenuItem>
                            <Dialog
                                open={openReqPin}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleCloseReqPin}
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogTitle>{"Request Menjadi Leader"}</DialogTitle>
                                <DialogContent>
                                    {/* <div className='mb-3'>
                                        <p className='input-label-text'>Nama User</p>
                                        <FormControl className='no-border' variant='standard' fullWidth>
                                                <Autocomplete
                                                    options={dataUser}
                                                    getOptionLabel={option => `${option.firstName} ${option.lastName}`}
                                                    renderInput={params => (
                                                        <TextField {...params} placeholder={"Nama Supplier"} variant="outlined" />
                                                    )}
                                                    onChange={(e, newValue) => {
                                                        setSentBy(newValue.id);
                                                        setProgram(newValue.ProgramId)
                                                    }}
                                                    className="hms-small-textfield mb-3"
                                                />
                                        </FormControl>
                                    </div> */}
                                    <div className='mb-3'>
                                        <p>Berikut beberapa kesepakatan sebelum menjadi admin</p>
                                        <ul>
                                            <li>
                                                <small>Anda diharuskan mencari jamaah yang melunasi seluruh pembayaran sebanyak pin yang telah anda request</small>
                                            </li>
                                            <li>
                                                <small>Jika jumlah jamaah yang melunasi pembayaran tidak sama dengan jumlah pin yang anda request dalam kurung waktu yang telah ditentukan, maka anda akan dikenakan sanksi</small>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='mb-3'>
                                        <p className='input-label-text'>Jumlah Pin</p>
                                        <FormControl className='no-border' variant='standard' fullWidth>
                                            <OutlinedInput type='text' placeholder={"Masukkan Jumlah Pin"} className='input-textfield' onChange={(e) => setPinAmount(Number(e.target.value))} />
                                        </FormControl>
                                    </div>
                                    <div className='mb-3'>
                                        <p className='input-label-text'>ketik <b>Saya Menyetujui</b> dibawah untuk menyetujui persyaratan</p>
                                        <FormControl className='no-border' variant='standard' fullWidth>
                                            <OutlinedInput type='text' placeholder={"Ketik Saya Menyetujui"} className='input-textfield' onChange={(e) => setAgreement(e.target.value)} />
                                        </FormControl>
                                    </div>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleCloseReqPin} variant="contained"
                                sx={{
                                    backgroundColor: "#f04141",
                                    boxShadow: "none",
                                    borderRadius: "8px",
                                    fontWeight: "600",
                                    '&:hover': {
                                        backgroundColor: "#f76060"
                                    }
                                }}
                                >Batal</Button>
                                <Button onClick={requestPin} variant="contained"
                                sx={{
                                    backgroundColor: "#417D7A",
                                    boxShadow: "none",
                                    borderRadius: "8px",
                                    fontWeight: "600"
                                }}
                                >Setuju</Button>
                                </DialogActions>
                            </Dialog>
                            </div>
                        ) : (
                            <div>
                                <MenuItem onClick={handleOpenInputPin}>
                                    <ListItemIcon>
                                        <MdInput/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        Pin Keanggotaan
                                    </ListItemText>
                                </MenuItem>
                                <Dialog
                                    open={openInputPin}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={handleCloseInputPin}
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <DialogTitle>{"Masukkan Pin Keanggotaan"}</DialogTitle>
                                    <DialogContent>
                                        {/* <div className='mb-3'>
                                            <p className='input-label-text'>Nama User</p>
                                            <FormControl className='no-border' variant='standard' fullWidth>
                                                    <Autocomplete
                                                        options={dataUser}
                                                        getOptionLabel={option => `${option.firstName} ${option.lastName}`}
                                                        renderInput={params => (
                                                            <TextField {...params} placeholder={"Nama Supplier"} variant="outlined" />
                                                        )}
                                                        onChange={(e, newValue) => {
                                                            setSentBy(newValue.id);
                                                            setProgram(newValue.ProgramId)
                                                        }}
                                                        className="hms-small-textfield mb-3"
                                                    />
                                            </FormControl>
                                        </div> */}
                                        <div className='text-center'>
                                            <p>Masukkan pin keanggotaan anda</p>
                                        </div>
                                        <div className='mb-3'>
                                            <FormControl className='no-border' variant='standard' fullWidth>
                                                <OutlinedInput type='text' placeholder={"Input Pin Disini"} className='input-textfield' onChange={(e) => setPin(e.target.value)} />
                                            </FormControl>
                                        </div>
                                        <div className='mb-3'>
                                            <p className='input-label-text'>ketik <b>Pin Sudah Benar</b> untuk melanjutkan proses</p>
                                            <FormControl className='no-border' variant='standard' fullWidth>
                                                <OutlinedInput type='text' placeholder={"Ketik Pin Sudah Benar"} className='input-textfield' onChange={(e) => setAgreement(e.target.value)} />
                                            </FormControl>
                                        </div>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleCloseInputPin} variant="contained"
                                    sx={{
                                        backgroundColor: "#f04141",
                                        boxShadow: "none",
                                        borderRadius: "8px",
                                        fontWeight: "600",
                                        '&:hover': {
                                            backgroundColor: "#f76060"
                                        }
                                    }}
                                    >Batal</Button>
                                    <Button onClick={inputPin} variant="contained"
                                    sx={{
                                        backgroundColor: "#417D7A",
                                        boxShadow: "none",
                                        borderRadius: "8px",
                                        fontWeight: "600"
                                    }}
                                    >Setuju</Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        )
                    }
                </Menu>
            </Popover>
            <Dialog
                open={openCreate}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseCreate}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Buat Laporan Transaksi"}</DialogTitle>
                <DialogContent>
                    {/* <div className='mb-3'>
                        <p className='input-label-text'>Nama User</p>
                        <FormControl className='no-border' variant='standard' fullWidth>
                                <Autocomplete
                                    options={dataUser}
                                    getOptionLabel={option => `${option.firstName} ${option.lastName}`}
                                    renderInput={params => (
                                        <TextField {...params} placeholder={"Nama Supplier"} variant="outlined" />
                                    )}
                                    onChange={(e, newValue) => {
                                        setSentBy(newValue.id);
                                        setProgram(newValue.ProgramId)
                                    }}
                                    className="hms-small-textfield mb-3"
                                />
                        </FormControl>
                    </div> */}
                    <div className='mb-3'>
                        <p className='input-label-text'>Jumlah</p>
                        <FormControl className='no-border' variant='standard' fullWidth>
                            <OutlinedInput type='text' placeholder={formatRupiah(Number(amount))} className='input-textfield' onChange={(e) => setAmount(e.target.value)} />
                        </FormControl>
                    </div>
                    <div className='mb-3'>
                        <p className='input-label-text'>Bukti Transaksi</p>
                        <FormControl className='no-border' variant='standard' fullWidth>
                            <OutlinedInput type='file' placeholder="Jumlah Transaksi" className='input-textfield' onChange={(e) => setFile(e.target.files[0])} />
                        </FormControl>
                    </div>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleCloseCreate}>Disagree</Button>
                <Button onClick={createTransaction}>Agree</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openLeader}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseLeader}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Request Menjadi Leader"}</DialogTitle>
                <DialogContent>
                    {/* <div className='mb-3'>
                        <p className='input-label-text'>Nama User</p>
                        <FormControl className='no-border' variant='standard' fullWidth>
                                <Autocomplete
                                    options={dataUser}
                                    getOptionLabel={option => `${option.firstName} ${option.lastName}`}
                                    renderInput={params => (
                                        <TextField {...params} placeholder={"Nama Supplier"} variant="outlined" />
                                    )}
                                    onChange={(e, newValue) => {
                                        setSentBy(newValue.id);
                                        setProgram(newValue.ProgramId)
                                    }}
                                    className="hms-small-textfield mb-3"
                                />
                        </FormControl>
                    </div> */}
                    <div className='mb-3'>
                        <p>Berikut beberapa kesepakatan sebelum menjadi admin</p>
                        <ul>
                            <li>
                                <small>Anda diharuskan mencari jamaah yang melunasi seluruh pembayaran sebanyak pin yang telah anda request</small>
                            </li>
                            <li>
                                <small>Jika jumlah jamaah yang melunasi pembayaran tidak sama dengan jumlah pin yang anda request dalam kurung waktu yang telah ditentukan, maka anda akan dikenakan sanksi</small>
                            </li>
                        </ul>
                    </div>
                    <div className='mb-3'>
                        <p className='input-label-text'>ketik <b>Saya Menyetujui</b> dibawah untuk menyetujui persyaratan</p>
                        <FormControl className='no-border' variant='standard' fullWidth>
                            <OutlinedInput type='text' placeholder={"Masukkan Jumlah Pin"} className='input-textfield' onChange={(e) => setAgreement(e.target.value)} />
                        </FormControl>
                    </div>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleCloseLeader} variant="contained"
                sx={{
                    backgroundColor: "#f04141",
                    boxShadow: "none",
                    borderRadius: "8px",
                    fontWeight: "600",
                    '&:hover': {
                        backgroundColor: "#f76060"
                    }
                }}
                >Batal</Button>
                <Button onClick={createAgreement} variant="contained"
                sx={{
                    backgroundColor: "#417D7A",
                    boxShadow: "none",
                    borderRadius: "8px",
                    fontWeight: "600"
                }}
                >Setuju</Button>
                </DialogActions>
            </Dialog>
            </div>
        </div>
      )
  }
}
