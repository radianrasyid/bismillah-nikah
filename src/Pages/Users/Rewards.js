import React from 'react';
import { Row, Col, ProgressBar, Card } from "react-bootstrap";
import { Button, FormControl, FormHelperText, styled } from '@mui/material';
import hajivektor from "../assetsUser/images/hajivektor.png";
import REWARD_DATA from "../assets/DATAS/REWARD_DATA.json";
import car from "../assetsUser/images/car.jpg"

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
    const [pelanggan, setPelanggan] = React.useState(6)
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
                        <small>Dapatkan <b>6 jamaah</b> lagi untuk mendapatkan free 1 jamaah umroh</small>
                    </div>
                    <div className='progress-container mt-4'>
                        <FormControl fullWidth={true}>
                            <ProgressBar now={8000000} max={20000000} min={0} variant="info" />
                            <FormHelperText style={{ margin: "0", width: "10rem" }}>
                                <small className='dashboard-user-welcome-info'><b>4</b> jamaah didapatkan</small>
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

        <Row>
            {
                REWARD_DATA.map((item, index) => {
                    return(
                        <Col>
                            <Card className="card-reward">
                                <Card.Img variant="top" src={car} />
                                <Card.Body>
                                    <Card.Title className='dashboard-user-welcome-title'>{item.name}</Card.Title>
                                    <Card.Text className='dashboard-user-program-text'>Dapatkan kesempatan lebih baik dengan mengajak lebih banyak teman anda</Card.Text>
                                    <ProgressBar now={pelanggan} max={item.terms_umroh} min={0} variant={"info"}/>
                                    <FormHelperText>
                                        <small className='dashboard-user-welcome-info'><b>{pelanggan}</b> jamaah didapatkan / <b>{item.terms_umroh}</b></small>
                                    </FormHelperText>
                                    <StyledButton className="mt-2" variant='contained' size="small" type="button"
                                    disabled={pelanggan === item.terms_umroh || pelanggan === item.terms_hjplus ? false : true }
                                    >Klaim</StyledButton>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    </div>
  )
}
