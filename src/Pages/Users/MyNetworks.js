import React from 'react'
import EmployeeNode from '../../EmployeeNode'
import TableReferred from './components/TableReferred'

export default function MyNetworks() {
  return (
    <div>
        <div className='table-container mb-3'>
            <TableReferred/>
        </div>

        <div className='mb-3 table-container'>
            <EmployeeNode/>
        </div>
    </div>  
  )
}
