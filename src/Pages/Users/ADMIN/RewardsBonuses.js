import React from 'react'
import { Row, Col, Stack } from "react-bootstrap";
import { Card, CardContent, CardActions, Slider, Stepper, Step, StepContent, Button, Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import MOCK_DATA_PREWARD from "../../assets/DATAS/MOCK_DATA_PREWARD.json";
import umroh from "../../assets/illustrations/hajj.jpg"
import { BiCar } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md"
import TableRewards from './components/TableRewards';
import { useSelector } from 'react-redux';
import TableRequestBonus from './components/TableRequestBonus';

export default function RewardsBonuses() {

    const currentUser = useSelector((state) => state.auth);
    const [value, setValue] = React.useState('1')
    const [data, setData] = React.useState([]);

    const handleChange = (e, newValue) => setValue(newValue);

    const fetchData = async(e) => {
        await fetch("https://umrohwebsite.herokuapp.com/api/v1/detailed/reward", {
            method: "GET",
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${currentUser.token}`
            }
        }).then(async(res) => {
            let hasil = await res.json();
            let hasilData = hasil.data;
            setData(hasilData)
        })
    }

    React.useEffect(() => {
        fetchData()
    }, [])

  return (
    <div>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Rewards & Bonuses" value="1" />
                <Tab label="Request" value="2" />
            </TabList>
            </Box>
            <TabPanel value="1">
                {
                    data.map((item, index) => {
                        let ganjilgenap = index % 2 == 0 ? "odd" : "even";
                        let ganjilgenaptext = index % 2 == 0 ? "even" : "odd"
                        if(item.status == 0){
                            return(
                                <Row className='g-0 mb-5'>
                                    <Col lg={3} style={{ display: "flex", alignItems: "center" }}>
                                        <div>
                                            <Card className={`card reward-card-${ganjilgenap}`}>
                                                <CardContent className='card-content'>
                                                    <div>
                                                        <Button className={`reward-card-${ganjilgenap}-button`} startIcon={<BiCar style={{ padding: "0.2rem 0.2rem", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "50%", transform: "scale(1.7)", marginRight: "0.5rem" }}/>} endIcon={<MdKeyboardArrowRight/>} variant="text" size="small">
                                                            {item.name}
                                                        </Button>
                                                    </div>
                                                    <div className={`text-${ganjilgenaptext}`}>
                                                        <h6 className={`text-${ganjilgenaptext}`} style={{ marginTop: "2rem", fontWeight: "600", color: "rgba(255, 255, 255, 1)" }}>Jamaah Umroh</h6>
                                                        <p className={`text-${ganjilgenaptext}`} style={{ marginTop: "-1rem", fontWeight: "600", color: "rgba(255, 255, 255, 1)" }}>{item.amountUmroh}</p>
                                                        <small className={`text-${ganjilgenaptext}`} style={{ marginTop: "-1rem", fontWeight: "600", color: "rgba(255, 255, 255, 1)" }}>atau</small>
                                                        <h6 className={`text-${ganjilgenaptext}`} style={{ marginTop: "0.5rem", fontWeight: "600", color: "rgba(255, 255, 255, 1)" }}>Jamaah Haji Plus</h6>
                                                        <p className={`text-${ganjilgenaptext}`} style={{ marginTop: "-1rem", fontWeight: "600", color: "rgba(255, 255, 255, 1)" }}>{item.amountHaji}</p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </Col>
                                    <Col className="connector-section" lg={2}>
                                        <hr className='connector'/>
                                    </Col>
                                    <Col>
                                        <div>
                                            <Card className='reward-card-odd-sidekick'>
                                                <CardContent>
                                                    <div>
                                                        <p className='reward-table-title'>Eligible Members</p>
                                                    </div>
                                                    <div>
                                                        <TableRewards/>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                            )
                        }else if(item.status == 1){
                            return(
                                <Row className='g-0 mb-5'>
                                    <Col lg={3} style={{ display: "flex", alignItems: "center" }}>
                                        <div>
                                            <Card className={`card reward-card-${ganjilgenap}`}>
                                                <CardContent className='card-content'>
                                                    <div>
                                                        <Button className={`reward-card-${ganjilgenap}-button`} startIcon={<BiCar style={{ padding: "0.2rem 0.2rem", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "50%", transform: "scale(1.7)", marginRight: "0.5rem" }}/>} endIcon={<MdKeyboardArrowRight/>} variant="text" size="small">
                                                            {item.name}
                                                        </Button>
                                                    </div>
                                                    <div className={`text-${ganjilgenaptext}`}>
                                                        <h6 className={`text-${ganjilgenaptext}`} style={{ marginTop: "2rem", fontWeight: "600", color: "rgba(255, 255, 255, 1)" }}>Refer User</h6>
                                                        <p className={`text-${ganjilgenaptext}`} style={{ marginTop: "-1rem", fontWeight: "600", color: "rgba(255, 255, 255, 1)" }}>{item.referAmount}</p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </Col>
                                    <Col className="connector-section" lg={2}>
                                        <hr className='connector'/>
                                    </Col>
                                    <Col>
                                        <div>
                                            <Card className='reward-card-odd-sidekick'>
                                                <CardContent>
                                                    <div>
                                                        <p className='reward-table-title'>Eligible Members</p>
                                                    </div>
                                                    <div>
                                                        <TableRewards/>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                            )
                        }
                    })
                }
            </TabPanel>
            <TabPanel value="2">
                <TableRequestBonus/>
            </TabPanel>
        </TabContext>
    </div>
  )
}
