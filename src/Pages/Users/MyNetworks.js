import React from 'react'
import EmployeeNode from '../../EmployeeNode'
import TableReferred from './components/TableReferred'
import { Row, Col, Form, Card } from 'react-bootstrap';

export default function MyNetworks() {
  return (
    <div>
        <div className='table-container mb-3'>
            <TableReferred/>
        </div>

        <Row>
          <Col>
            <div className='mb-3 table-container'>
                <div className='mb-3'>
                  <p>Referral</p>
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                    <EmployeeNode/>
                  </div>
                </div>
            </div>
          </Col>
          <Col>
            <div className='mb-3 table-container'>
                <div className='mb-3'>
                  <p>Leader</p>
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                    <EmployeeNode/>
                  </div>
                </div>
            </div>
          </Col>
        </Row>
    </div>  
  )
}
