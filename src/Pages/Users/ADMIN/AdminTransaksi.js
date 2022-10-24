import React from 'react';
import { Row, Col, Form, Card } from 'react-bootstrap';
import { Button, IconButton } from '@mui/material';
import TableTransaksi from './components/TableTransaksi';

export default function AdminTransaksi() {
  return (
    <div>
        <div className='table-container'>
            <TableTransaksi/>
        </div>
    </div>
  )
}
