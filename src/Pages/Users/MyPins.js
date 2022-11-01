import React from 'react'
import { Row, Col, Card } from "react-bootstrap";
import { Button } from '@mui/material';
import TablePin from './components/TablePin';
import { useSelector } from 'react-redux';

export default function MyPins() {

    const pinIdData = useSelector((state) => state.pin);

  return (
    <div>
        <div className='mb-3' style={{ display: "flex", justifyContent: "center" }}>
            <p>Will Be Org Diagram</p>
        </div>
        <Row>
            <Col className='table-container'>
                <div>
                    <TablePin/>
                </div>
            </Col>
            <Col className='table-container ms-1'>
                <div className='text-center'>
                    <h2 style={{ fontSize: "20px" }}>DETAIL PIN</h2>
                </div>
                {
                    pinIdData.data == null || pinIdData.data == undefined ? (<p>Tidak ada detail pin untuk ditampilkan</p>) : 
                    (
                        <div>
                            <Row>
                                <Col>
                                    <p>Pin</p>
                                </Col>
                                <Col>
                                    <p>: {pinIdData.data.pins}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Dimiliki Oleh</p>
                                </Col>
                                <Col>
                                    <p>: {pinIdData.data.userid.firstName} {pinIdData.data.userid.lastName}</p>
                                </Col>
                            </Row>
                            {
                                pinIdData.data.usedby == null ? (null) : (
                                    <>
                                        <Row>
                                            <Col><p>Digunakan Oleh</p></Col>
                                            <Col><p>: {pinIdData.data.usedby.firstName} {pinIdData.data.usedby.lastName}</p></Col>
                                        </Row>
                                        <Row>
                                            <Col><p>Digunakan Tanggal</p></Col>
                                            <Col><p>: {pinIdData.data.updatedAt}</p></Col>
                                        </Row>
                                    </>
                                )
                            }
                            <Row>
                                <Col><p>Dibuat Tanggal</p></Col>
                                <Col><p>: {pinIdData.data.createdAt}</p></Col>
                            </Row>
                        </div>
                    )
                }
            </Col>
        </Row>
    </div>
  )
}
