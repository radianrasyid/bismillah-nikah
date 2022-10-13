import React from 'react'
import { Row, Col } from "react-bootstrap";
import { Card, CardActions, CardContent, Button, Typography } from "@mui/material";
import MOCK_DATA from "../../assets/DATAS/MOCK_DATA.json"

export default function Products() {
  return (
    <div>
        <Row className='gy-4 gx-4'>
            {
                MOCK_DATA.map((item, index) => {
                    return(
                        <Col key={item.id} lg={3}>
                            <Card className="products-card">
                                <CardContent>
                                    <div className='text-center'>
                                        <img src={item.image} className="image-products-all" />
                                    </div>
                                    <div className='text-center'>
                                        <h5>{item.product_name}</h5>
                                        <p>{item.price}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    </div>
  )
}
