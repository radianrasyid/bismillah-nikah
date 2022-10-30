import React from 'react'
import { Row, Col, Form } from "react-bootstrap"
import EmployeeNodeAll from '../../../EmployeeNodeAll'

export default function AdminTree() {
  return (
    <div>
        <div className='table-container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <EmployeeNodeAll/>
        </div>
    </div>
  )
}
