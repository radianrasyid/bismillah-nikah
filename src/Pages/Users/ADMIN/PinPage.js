import React from 'react'
import TableRequest from './components/TableRequest'
import TableRequestPin from './components/TableRequestPin';
import { Row, Col, Form } from "react-bootstrap"

export default function PinPage() {
  return (
    <div>
        <Row>
          <Col>
            <div className='table-container'>
              <TableRequest/>
            </div>
          </Col>
          <Col>
            <div className='table-container'>
              <TableRequestPin/>
            </div>
          </Col>
        </Row>
    </div>
  )
}
