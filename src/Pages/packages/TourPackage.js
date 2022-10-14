import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Button, Stack, styled } from "@mui/material";
import sliderBanner1 from "../assetsUser/images/banner1.jpg";
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

export default function TourPackage() {
  return (
    <div>
        <section className="home-slider-section mb-2">
            <div className="home-slider">
                    <div className="home-banner-items">
                        <div className="banner-inner-wrap" style={{ backgroundImage: `url(${sliderBanner1})` }}></div>
                        <div className="banner-content-wrap">
                            <div className="container">
                                <div className="banner-content text-center">
                                    <h2 className="banner-title">PROGRAM KAMI</h2>
                                    <p>Memberikan kemudahan bagi anda untuk melakukan ibadah haji dan umroh dengan aman, nyaman, dan terjamin</p>
                                    <a href="#" className="button-primary">CONTINUE READING</a>
                                </div>
                            </div>
                        </div>
                    <div className="overlay"></div>
                </div>
            </div>
        </section>
        <section className='mb-3 p-3'>
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
                                    <Stack direction={"row"} spacing={2}>
                                        <StyledButton className="mt-2" variant='contained' size="small" type="button">
                                            Ikuti
                                        </StyledButton>
                                        <StyledButton className="mt-2" variant='contained' size="small" type="button">
                                            Detail
                                        </StyledButton>
                                    </Stack>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
        </section>
    </div>
  )
}
