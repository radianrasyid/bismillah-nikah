import React from 'react'
import { Row, Col, Card } from "react-bootstrap"
import { useSelector } from 'react-redux'

export default function TransactionTabs() {

    const currentData = useSelector((state) => state.user.data);

  return (
    <div>
        
    </div>
  )
}
