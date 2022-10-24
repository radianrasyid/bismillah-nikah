import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Button, Stack, styled } from "@mui/material";
import sliderBanner1 from "../assetsUser/images/banner1.jpg";
import REWARD_DATA from "../assets/DATAS/REWARD_DATA.json";
import car from "../assetsUser/images/car.jpg";
import { useNavigate } from 'react-router-dom';

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

    const direct = useNavigate();

    const [program, setProgram] = React.useState([]);

    const fetchData = async(e) => {
        let response = await fetch("https://umrohwebsite.herokuapp.com/api/v1/program");
        let hasil = await response.json();

        setProgram(hasil.data);
    }

    React.useEffect(() => {
        fetchData();
    }, [])

    console.log("INI DATA PROGRAM", program);

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
                program.map((item, index) => {
                    let link = `http://localhost:3000/tourpackages/${item.id}`
                    return(
                        <Col key={item.id}>
                            <Card className="card-reward">
                                <Card.Img variant="top" className='product-image' src={item.image} />
                                <Card.Body>
                                    <Card.Title className='dashboard-user-welcome-title'>{item.programName}</Card.Title>
                                    <Card.Text className='dashboard-user-program-text'>{item.programDescription}</Card.Text>
                                    <Stack direction={"row"} spacing={2}>
                                        <StyledButton className="mt-2" variant='contained' size="small" type="button">
                                            Ikuti
                                        </StyledButton>
                                        <StyledButton className="mt-2" variant='contained' size="small" type="button" onClick={() => direct(`/tourpackages/${item.id}`)}>
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
