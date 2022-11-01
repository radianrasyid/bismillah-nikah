import React from 'react';
import { Row, Col, ProgressBar, Card } from "react-bootstrap";
import { Button, FormControl, FormHelperText, styled, Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import hajivektor from "../assetsUser/images/hajivektor.png";
import REWARD_DATA from "../assets/DATAS/REWARD_DATA.json";
import car from "../assetsUser/images/car.jpg";
import ReactLoading from "react-loading";
import { useSelector } from 'react-redux';
import formatRupiah from '../functions/formatRupiah';

const StyledButton = styled(Button)(({theme}) => ({
    '&:hover':{
        backgroundColor: "#385c5a",
        boxShadow: "none",
        textTransform: "none"
    },
    backgroundColor: "rgba(65, 125, 122, 1)",
    boxShadow: "none",
    borderRadius: "8px",
    textTransform: "none",
    fontWeight: "600"
}))

export default function Rewards() {
    const currentUser = useSelector((state) => state.auth);
    const [pelanggan, setPelanggan] = React.useState(6);
    const [userData, setUserData] = React.useState(null);
    const [reward, setReward] = React.useState([]);
    const [bonus, setBonus] = React.useState([]);
    const [program, setProgram] = React.useState([]);
    let [activeChild, setActiveChild] = React.useState(null);
    const [loading, setLoading] = React.useState(null);

    const [value, setValue] = React.useState('1');

    const token = useSelector((state) => state.auth.token);

    const handleChange = (e, newValue) => setValue(newValue);

    const fetchData = async(e) => {
        setLoading(true);
        await fetch("http://localhost:8000/api/v1/program")
        .then(async(res) => {
            let hasil = await res.json();
            setProgram(hasil.data);
        })

        await fetch("http://localhost:8000/api/v1/reward", {
            method: "GET",
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${currentUser.token}`
            }
        }).then(async(res) => {
            let hasil = await res.json();
            let hasilData = hasil.data;
            setReward(hasilData);
        })

        await fetch("http://localhost:8000/api/v1/user/whoami", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(async(res) => {
            let hasil = await res.json();
            setUserData(hasil)
            let hasilData = await hasil.data;

            let members = await hasil.user.referrerId.filter((item) => {
                if(item.status == 2 && item.referrerChild == false){
                    return item
                }
            })

            setActiveChild(members)
        })

        await fetch("http://localhost:8000/api/v1/bonus", {
            method: "GET",
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${currentUser.token}`
            }
        }).then(async(res) => {
            let hasil = await res.json();
            let hasilData = hasil.data;
            setBonus(hasilData);
        })
        setLoading(false)
    }

    const onRewardClaimed = async(id) => {

        await fetch(`http://localhost:8000/api/v2/reward/claim`, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${currentUser.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                reward_id: id
            })
        })
    }

    const onBonusClaimed = async(id) => {

        await fetch(`http://localhost:8000/api/v2/bonus/claim`, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${currentUser.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bonus_id: id
            })
        })
    }
    
    React.useEffect(() => {
        fetchData()
    }, [])

    console.log("INI ACTIVE CHILD", activeChild);

  if(userData !== null){
    let referrer = userData.user.referrerId
    let amount = activeChild == null ? -1 : activeChild.length
    return (
        <div>
            <div className='dashboard-user-welcome-card mb-3'>
                <Row>
                    <Col lg={7}>
                        <div className='mb-2'>
                            <p className='dashboard-user-welcome-title'>Welcome,</p>
                            <p className='dashboard-user-welcome-title' style={{ marginTop: "-1.1rem" }}>Radian Rasyid</p>
                        </div>
                        <div>
                            <small>Dapatkan <b>{activeChild == null ? 0 : activeChild.length} jamaah</b> lagi untuk mendapatkan free 1 jamaah umroh</small>
                        </div>
                        <div className='progress-container mt-4'>
                            <FormControl fullWidth={true}>
                                <ProgressBar now={activeChild == null ? 0 : activeChild.lengthh} max={10} min={0} variant="info" />
                                <FormHelperText style={{ margin: "0", width: "10rem" }}>
                                    <small className='dashboard-user-welcome-info'><b>{activeChild == null ? 0 : activeChild.length}</b> Mitra jamaah didapatkan</small>
                                </FormHelperText>
                            </FormControl>
                        </div>
                    </Col>
                    <Col style={{ display: "flex", justifyContent: "right" }}>
                        <img src={hajivektor} className="dashboard-user-welcome-img" />
                    </Col>
                </Row>
    
                <div className='text-center'>
                    <p className='dashboard-user-welcome-title'>Ajak lebih banyak orang lagi untuk mendapatkan hadiah menarik!</p>
                </div>
            </div>

            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Reward" value="1" sx={{
                        textTransform: "none",
                        fontWeight: "600",
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px",
                        '&.Mui-selected': {
                            backgroundColor: "#2E6A67",
                            color: "#FFFFFF"
                        }
                    }}/>
                    <Tab label="Bonus" value="2" sx={{
                        textTransform: "none",
                        fontWeight: "600",
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px",
                        '&.Mui-selected': {
                            backgroundColor: "#2E6A67",
                            color: "#FFFFFF"
                        }
                    }}/>
                </TabList>
                </Box>
                <TabPanel value="1">
                    <Row>
                        {
                            reward.map((item, index) => {
                                if(item.status == 0){
                                    return(
                                        <Col>
                                            <Card className="card-reward">
                                                <Card.Img variant="top" src={item.image} style={{
                                                    width: "100%", height: "15rem", objectFit: "cover",
                                                }} />
                                                <Card.Body>
                                                    <Card.Title className='dashboard-user-welcome-title'>{item.name}</Card.Title>
                                                    <Card.Text className='dashboard-user-program-text'>Dapatkan kesempatan lebih baik dengan mengajak lebih banyak teman anda</Card.Text>
                                                    <ProgressBar now={activeChild == null ? 0 : activeChild.length} max={item.terms_umroh} min={0} variant={"info"}/>
                                                    <FormHelperText>
                                                        <small className='dashboard-user-welcome-info'><b>{activeChild == null ? 0 : activeChild.length}</b> Mitra jamaah didapatkan / <b>{item.terms_umroh}</b></small>
                                                    </FormHelperText>
                                                    <StyledButton className="mt-2" variant='contained' size="small" type="button" onClick={(e) => {
                                                        e.preventDefault();
    
                                                        onRewardClaimed(item.id)
                                                    }}
                                                    disabled={amount === item.amountUmroh || amount === item.amountHaji ? false : true }
                                                    >Klaim</StyledButton>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                }
                            })
                        }
                    </Row>
                </TabPanel>
                <TabPanel value="2">
                <Row>
                        {
                            bonus.map((item, index) => {
                                return(
                                    <Col>
                                        <Card className="card-reward">
                                            {/* <Card.Img variant="top" src={item.image} style={{
                                                width: "100%", height: "15rem", objectFit: "cover",
                                            }} /> */}
                                            <Card.Body>
                                                <Card.Title className='dashboard-user-welcome-title'>{item.bonusName}</Card.Title>
                                                <Card.Text className='dashboard-user-program-text'>Dapatkan kesempatan lebih baik dengan mengajak lebih banyak teman anda</Card.Text>
                                                <ProgressBar now={activeChild == null ? 0 : activeChild.length} max={item.terms_umroh} min={0} variant={"info"}/>
                                                <FormHelperText>
                                                    <small className='dashboard-user-welcome-info'><b>{activeChild == null ? 0 : (formatRupiah(activeChild.length * item.amount))}</b></small>
                                                </FormHelperText>
                                                <StyledButton className="mt-2" variant='contained' size="small" type="button" onClick={(e) => {
                                                    e.preventDefault();

                                                    onBonusClaimed(item.id)
                                                }}
                                                disabled={activeChild.length === 0 ? true : false }
                                                >Klaim</StyledButton>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </TabPanel>
            </TabContext>
        </div>
      )
  }else if(loading === true){
    return(
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <ReactLoading type="bars" color='#7ab7ff' width={"10%"} height={"10%"} />
        </div>
    )
  }
}
