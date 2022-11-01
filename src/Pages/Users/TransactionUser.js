import React from 'react'
import { Row, Col, Card } from "react-bootstrap"
import TableCommisionHistory from './components/TableCommisionHistory'
import TableTransactionUser from './components/TableTransactionUser'

export default function TransactionUser() {
  return (
    <div>
        <div className='table-container mb-3'>
            <p>Riwayat Klaim Komisi</p>
            <TableCommisionHistory/>
        </div>
        <div className='table-container'>
            <p>Riwayat Transaksi</p>
            <TableTransactionUser/>
        </div>
    </div>
  )
}
