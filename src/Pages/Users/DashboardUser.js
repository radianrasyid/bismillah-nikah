import React from 'react';
import { Row, Col, ProgressBar } from "react-bootstrap"
import { Button, FormControl, useFormControl, FormHelperText } from '@mui/material';
import hajivektor from "../assetsUser/images/hajivektor.png";
import logo from "../assets/images/logo-hrbs.jpg";
import TableGrupSaya from './components/TableGrupSaya';
import TableReferred from './components/TableReferred';

export default function DashboardUser() {
  return (
    <div>
        <Row className='mb-3'>
            <Col lg={9} md={3}>
                <div className='dashboard-user-welcome-card'>
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
                </div>
            </Col>
            <Col lg={3} md={6}>
                <div className='dashboard-user-program-card'>
                    <Row>
                        <Col lg={3}>
                            <img src={logo} />
                        </Col>
                        <Col>
                            <p className='dashboard-user-welcome-title'>Program 6 Bulan</p>
                            <small style={{ marginTop: "-1rem", fontWeight: 600, color: "#828282" }}>Umroh</small>
                        </Col>
                        <div className='mb-3'>
                            <small className='dashboard-user-program-text'>Paket umroh reguler 6 bulan dengan jadwal keberangkatan 20 Januari 2023 dengan maskapai Saudia Airlanes</small>
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
                                        <small className='dashboard-user-program-text'>46%</small>
                                    </Col>
                                </Row>
                            </FormHelperText>
                            <ProgressBar className='progress-program' now={8000000} max={20000000} min={0} variant="info" />
                            <FormHelperText sx={{ margin: "0", width: "100%" }}>
                                <Row>
                                    <Col>
                                        <small className='dashboard-user-program-price'>Rp 16.932.000</small>
                                    </Col>
                                </Row>
                            </FormHelperText>
                        </FormControl>
                    </div>
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
    </div>
  )
}
