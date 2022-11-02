import React from 'react'
import EmployeeNode from '../../EmployeeNode'
import TableReferred from './components/TableReferred'
import { Row, Col, Form, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import EmployeeNodeUpline from '../../EmployeeNodeUpline';

export default function MyNetworks() {

  const currentUser = useSelector((state) => state.auth);
  const [dataUser, setDataUser] = React.useState(null);

  const fetchData = async(e) => {
    await fetch("https://umrohwebsite.herokuapp.com/api/v1/user/whoami", {
      method: "GET",
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${currentUser.token}`
      }
    }).then(async(res) => {
      let hasil = await res.json();
      let hasilData = hasil.user;
      setDataUser(hasilData);
    })
  }
  
  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
        
        <div className='mb-3'>
          <div className='text-center'>
            <h2>Upline Saya</h2>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <EmployeeNodeUpline/>
            </div>
          </div>
        </div>

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
