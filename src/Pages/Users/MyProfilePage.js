import React from 'react'
import { Row, Col, Form, Card } from "react-bootstrap";
import { Avatar, Stack, FormControl, OutlinedInput } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux';

export default function MyProfilePage() {

  const currentUser = useSelector((state) => state.auth);
  const [data, setData] = React.useState(null);

  const fetchData = async(e) => {
    await fetch("http://localhost:8000/api/v1/user/whoami", {
      method: "GET",
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${currentUser.token}`
      }
    }).then(async(res) => {
      let hasil = await res.json();
      let hasilData = hasil.user;
      setData(hasilData);
    })
  }

  React.useEffect(() => {
    fetchData()
  }, [])

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
                  <OutlinedInput type='text' placeholder={data.firstName} className='input-textfield' />
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
                  <OutlinedInput type='text' placeholder={data.lastName} className='input-textfield' />
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
                  <OutlinedInput type='text' placeholder={data.phoneNumber} className='input-textfield' />
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
                  <OutlinedInput type='text' placeholder={data.street} className='input-textfield' />
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
                  <OutlinedInput type='text' placeholder={data.district} className='input-textfield' />
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
                  <OutlinedInput type='text' placeholder={data.city} className='input-textfield' />
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
                  <OutlinedInput type='text' placeholder={data.province} className='input-textfield' />
                </FormControl>
              </Col>
            </Row>
            </div>
          </div>
        </div>
    </div>
  )
}
