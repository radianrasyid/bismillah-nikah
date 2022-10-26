import React from 'react'
import { Row, Col, Form, Card } from "react-bootstrap";
import { Avatar, Stack, FormControl, OutlinedInput } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export default function MyProfilePage() {
  return (
    <div>
        <div className='table-container'>
          <div className='text-center mb-3' style={{ display: "flex", justifyContent: "center" }}>
            <Avatar src={PersonIcon} sx={{ width: 56, height: 56 }} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
            <Row className='mb-3'>
              <Col style={{ display: "flex", alignItems: "center" }}>
                <p className='input-label-text'>First Name</p>
              </Col>
              <Col>
                <FormControl className='no-border' variant='standard' fullWidth>
                  <OutlinedInput type='text' placeholder='username' className='input-textfield' />
                </FormControl>
              </Col>
            </Row>
            <hr></hr>
            <Row className='mb-3'>
              <Col style={{ display: "flex", alignItems: "center" }}>
                <p className='input-label-text'>Last Name</p>
              </Col>
              <Col>
                <FormControl className='no-border' variant='standard' fullWidth>
                  <OutlinedInput type='text' placeholder='username' className='input-textfield' />
                </FormControl>
              </Col>
            </Row>
            <hr></hr>
            <Row className='mb-3'>
              <Col style={{ display: "flex", alignItems: "center" }}>
                <p className='input-label-text'>Phone Number</p>
              </Col>
              <Col>
                <FormControl className='no-border' variant='standard' fullWidth>
                  <OutlinedInput type='text' placeholder='username' className='input-textfield' />
                </FormControl>
              </Col>
            </Row>
            <hr></hr>
            <Row className='mb-3'>
              <Col style={{ display: "flex", alignItems: "center" }}>
                <p className='input-label-text'>Street</p>
              </Col>
              <Col>
                <FormControl className='no-border' variant='standard' fullWidth>
                  <OutlinedInput type='text' placeholder='username' className='input-textfield' />
                </FormControl>
              </Col>
            </Row>
            <hr></hr>
            <Row className='mb-3'>
              <Col style={{ display: "flex", alignItems: "center" }}>
                <p className='input-label-text'>District</p>
              </Col>
              <Col>
                <FormControl className='no-border' variant='standard' fullWidth>
                  <OutlinedInput type='text' placeholder='username' className='input-textfield' />
                </FormControl>
              </Col>
            </Row>
            <hr></hr>
            <Row className='mb-3'>
              <Col style={{ display: "flex", alignItems: "center" }}>
                <p className='input-label-text'>City</p>
              </Col>
              <Col>
                <FormControl className='no-border' variant='standard' fullWidth>
                  <OutlinedInput type='text' placeholder='username' className='input-textfield' />
                </FormControl>
              </Col>
            </Row>
            <hr></hr>
            <Row className='mb-3'>
              <Col style={{ display: "flex", alignItems: "center" }}>
                <p className='input-label-text'>Province</p>
              </Col>
              <Col>
                <FormControl className='no-border' variant='standard' fullWidth>
                  <OutlinedInput type='text' placeholder='username' className='input-textfield' />
                </FormControl>
              </Col>
            </Row>
            </div>
          </div>
        </div>
    </div>
  )
}
