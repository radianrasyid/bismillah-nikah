import React from 'react'
import { Row, Col, Stack } from "react-bootstrap";
import { Card, CardContent, CardActions, Slider, Stepper, Step, StepContent, Button } from '@mui/material';
import MOCK_DATA_PREWARD from "../../assets/DATAS/MOCK_DATA_PREWARD.json";
import umroh from "../../assets/illustrations/hajj.jpg"
import { BiCar } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md"
import TableRewards from './components/TableRewards';

export default function RewardsBonuses() {
  return (
    <div>
        {
            MOCK_DATA_PREWARD.map((item, index) => {
                let ganjilgenap = index % 2 == 0 ? "odd" : "even";
                let ganjilgenaptext = index % 2 == 0 ? "even" : "odd"
                return(
                    <Row className='g-0 mb-5'>
                        <Col lg={3} style={{ display: "flex", alignItems: "center" }}>
                            <div>
                                <Card className={`card reward-card-${ganjilgenap}`}>
                                    <CardContent className='card-content'>
                                        <div>
                                            <Button className={`reward-card-${ganjilgenap}-button`} startIcon={<BiCar style={{ padding: "0.2rem 0.2rem", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "50%", transform: "scale(1.7)", marginRight: "0.5rem" }}/>} endIcon={<MdKeyboardArrowRight/>} variant="text" size="small">
                                                Suzuki Spreso
                                            </Button>
                                        </div>
                                        <div className={`text-${ganjilgenaptext}`}>
                                            <h6 className={`text-${ganjilgenaptext}`} style={{ marginTop: "2rem", fontWeight: "600", color: "rgba(255, 255, 255, 1)" }}>Jamaah Umroh</h6>
                                            <p className={`text-${ganjilgenaptext}`} style={{ marginTop: "-1rem", fontWeight: "600", color: "rgba(255, 255, 255, 1)" }}>200</p>
                                            <small className={`text-${ganjilgenaptext}`} style={{ marginTop: "-1rem", fontWeight: "600", color: "rgba(255, 255, 255, 1)" }}>atau</small>
                                            <h6 className={`text-${ganjilgenaptext}`} style={{ marginTop: "0.5rem", fontWeight: "600", color: "rgba(255, 255, 255, 1)" }}>Jamaah Haji Plus</h6>
                                            <p className={`text-${ganjilgenaptext}`} style={{ marginTop: "-1rem", fontWeight: "600", color: "rgba(255, 255, 255, 1)" }}>100</p>
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
            })
        }
    </div>
  )
}
