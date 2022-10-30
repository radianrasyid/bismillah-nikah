import React from 'react';
import { Row, Col, Card, ProgressBar } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { FormControl, FormHelperText } from '@mui/material';
import { formatRupiah } from '../../../components/FormatRupiah';

export default function ProgramTabs() {

    const currentData = useSelector((state) => state.user.data);

  if(currentData.programid !== null){
    return (
        <div>
            <div>
                <Row>
                    <Col style={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        padding: "2rem 2rem"
                    }}>
                        <Card>
                            <Card.Img src={currentData.programid.image} />
                            <Card.Header className="text-center">{currentData.programid.programName}</Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <small className='ud-userinfo-title'>Dibayar</small>
                                    </Col>
                                    <Col>
                                        <FormControl fullWidth={true}>
                                            <ProgressBar now={currentData.currentPayment == null ? 0 : currentData.currentPayment} max={currentData.programid.price} min={0} variant="info" />
                                            <FormHelperText style={{ margin: "0", width: "20rem" }}>
                                                <small className='dashboard-user-welcome-info'><b>{formatRupiah(currentData.currentPayment)}</b> {"/"} {formatRupiah(currentData.programid.price)}</small>
                                            </FormHelperText>
                                        </FormControl>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
      )
  }else if(currentData.programid == null){
    return(
        <div>
            <p>Tidak Ada Data</p>
        </div>
    )
  }
}
