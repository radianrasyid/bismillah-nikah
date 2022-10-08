import React from 'react';
import { Row, Col } from "react-bootstrap";
import { Button, IconButton } from "@mui/material";
import img1 from "../../Pages/assets/images/gallery-6.jpg"
import { BiEdit } from "react-icons/bi"

export default function EditUser() {
  return (
    <div>
        <div className='mb-5'>
            <h4>Halo, John Doe</h4>
            <p>Semoga harimu menyenangkan</p>
        </div>
        <div>
          <Row>
            <Col>
              <div>
                <p>Foto Profil</p>
                <Row>
                  <Col>
                    <img src={img1} className="profile-photo" />
                  </Col>
                  <Col>
                    <div>
                      <Button startIcon={<BiEdit/>} variant="contained" size="small">
                        Foto Profil
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
            
            </Col>
          </Row>
        </div>
    </div>
  )
}
