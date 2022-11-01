import React from 'react';
import { Row, Col, Form, Card, ProgressBar, Carousel } from 'react-bootstrap';
import { Button, IconButton, List, ListItemIcon, ListItem, Stack, ListItemText, FormControl, FormHelperText } from '@mui/material';
import TableTransaksi from './components/TableTransaksi';
import { useSelector } from 'react-redux';
import customBullet from "../../assetsUser/images/ellipse.png"
import formatRupiah from '../../functions/formatRupiah';

export default function AdminTransaksi() {

  const currentUser = useSelector((state) => state.auth);
  const [program, setProgram] = React.useState([])
  const [lunasMember, setLunasMember] = React.useState([]);
  const [notLunasMember, setNotLunasMember] = React.useState([]);
  const [yesIkutNotLunas, setYesIkutNotLunas] = React.useState([]);
  const [pendatapan, setPendatapan] = React.useState([]);
  const [totalAngsuran, setTotalAngsuran] = React.useState([]);
  const [leftOver, setLeftOver] = React.useState([]);

  const fetchData = async(e) => {
    await fetch('http://localhost:8000/api/v1/program', {
      method: "GET",
      mode: "cors",
      headers: {
        'Authorization': `Bearer ${currentUser.token}`
      }
    }).then(async(res) => {
      let hasil = await res.json();
      let hasilData = hasil.data
      setProgram(hasilData);
      let temp = []
      let memberLunas = await hasilData.map((item) => {
        item.users.filter((user) => {
          if(user.currentPayment == item.price){
            return temp.push(user)
          }
        })
      })
      setLunasMember(temp)

      let tempBelumLunas = [];
      let memberBelumLunas = await hasilData.map((item) => {
        item.users.filter((user) => {
          if(user.currentPayment < item.price){
            return tempBelumLunas.push(user)
          }
        })
      })
      setNotLunasMember(tempBelumLunas)

      let tempYesIkutNotDp = [];
      let memberYesIkutNotDp = await hasilData.map((item) => {
        item.users.filter((user) => {
          if(user.currentPayment == null || user.currentPayment == 0){
            return tempYesIkutNotDp.push(user)
          }
        })
      })
      setYesIkutNotLunas(tempYesIkutNotDp);

      let pendapatanTest = [];
      let pendapatanIterate = await hasilData.map(async(item) => {
        let pendapatanTemp = 0
        if(item.users[0] !== null || item.users[0] !== undefined || item.users[0].firstName !== undefined){
          let outcome = await item.users.length*item.price
          return pendapatanTest.push({pendapatan: outcome, ProgramId: item.id})
        }
      })
      setPendatapan(pendapatanTest);

      let totalAngsuranTemp = [];
      let iterateTotalAngsuran = await hasilData.map(async(item) => {
        let temp = await item.users.reduce((accumulator, object) => {
          return accumulator + object.currentPayment;
        }, 0)
        console.log("INI TESTING ACCUMULATOR", temp);
        if(item.users[0] !== null || item.users[0] !== undefined || item.users[0].firstName !== undefined){
          let expected = await item.price * item.users.length;
          return totalAngsuranTemp.push({totalPaid: temp, expected: expected, percentage: Math.ceil((temp/(item.users.length * item.price) * 100)), ProgramId: item.id})
        }
      })
      setTotalAngsuran(totalAngsuranTemp);

      let totalLeftOverTemp = [];
      let iterateTotalLeftOver = await hasilData.map(async(item) => {
        if(item.users[0] !== null || item.users[0] !== undefined || item.users[0].firstName !== undefined){
          let expectedOutput = await item.price * item.users.length;
          let currentPayment = await item.users.reduce((accumulator, object) => {
            return accumulator + object.currentPayment;
          }, 0)
          return totalLeftOverTemp.push({leftOver: expectedOutput - currentPayment, currentPayment: currentPayment, expectedOutput: expectedOutput, percentage: Math.ceil((currentPayment/expectedOutput) * 100), ProgramId: item.id})
        }
      })
      setLeftOver(totalLeftOverTemp)
    })
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  console.log("MITRA YANG SUDAH LUNAS", lunasMember);
  console.log("MITRA YANG BELUM LUNAS", notLunasMember);
  console.log("MITRA YANG BELUM DP TAPI SUDAH IKUT", yesIkutNotLunas);
  console.log("EXPECTED OUTPUT", pendatapan);
  console.log("TOTAL ANGSURAN DAN PEMBAYARAN YANG TELAH MASUK", totalAngsuran);
  console.log("TOTAL KEKURANGAN ANGSURAN PER PROGRAM", leftOver);

  return (
    <div>
        <div className='mb-3'>
          <Row>
            <Carousel>
              <Carousel.Item>
              <Row style={{ display: "flex", justifyContent: "center" }}>
              <Col style={{
                borderRadius: "8px",
                border: "0.1px solid #2E6A67",
                paddingTop: "1rem",
                paddingBottom: "2rem",
                marginRight: "0.5rem"
              }}
              lg={5}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p style={{ fontWeight: "600", textTransform: "uppercase", fontSize: "12px" }}>Jumlah dan persen mitra yang sudah lunas</p>
                </div>
                <Stack direction={"column"} spacing={5}>
                  {
                    program.map((item) => {
                      let temp = []
                      temp = lunasMember.filter((user) => {
                        if(user.ProgramId == item.id){
                          return user
                        }
                      })
                      return(
                        <div>
                          <Row>
                            <div style={{ display: 'flex', flexDirection: "row" }}>
                              <div style={{ display: "flex", alignItems: "center", marginRight: "0.5rem" }}>
                                <img src={customBullet} style={{ width: "0.4rem", height: "0.4rem" }} />
                              </div>
                              <Col style={{
                                display: 'flex',
                                alignItems: "center"
                              }}
                              lg={4}
                              >
                                <small style={{ margin: "0", padding: "0", fontWeight: "600", fontSize: "12px" }}>{item.programName}</small>
                              </Col>
                              <Col style={{
                                display: 'flex',
                                alignItems: "center",
                                marginLeft: "1rem"
                              }}>
                                <FormControl fullWidth={true}>
                                    <ProgressBar now={temp.length} max={item.users.length} min={0} variant="info" />
                                    <FormHelperText style={{ margin: "0", display: 'flex', justifyContent: "center" }}>
                                        <small className='dashboard-user-welcome-info'><b>{temp.length}</b> dari {item.users.length} jamaah yang sudah lunas</small>
                                    </FormHelperText>
                                </FormControl>
                              </Col>
                            </div>
                          </Row>
                        </div>
                      )
                    })
                  }
                </Stack>        
              </Col>
              <Col style={{
                borderRadius: "8px",
                border: "0.1px solid #2E6A67",
                paddingTop: "1rem",
                paddingBottom: "2rem",
                marginLeft: "0.5rem"
              }}
              lg={5}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p style={{ fontWeight: "600", textTransform: "uppercase", fontSize: "12px" }}>Jumlah mitra yang belum lunas</p>
                </div>
                <Stack direction={"column"} spacing={5}>
                  {
                    program.map((item) => {
                      let temp = []
                      temp = notLunasMember.filter((user) => {
                        if(user.ProgramId == item.id){
                          return user
                        }
                      })
                      return(
                        <div>
                          <Row>
                            <div style={{ display: 'flex', flexDirection: "row" }}>
                              <div style={{ display: "flex", alignItems: "center", marginRight: "0.5rem" }}>
                                <img src={customBullet} style={{ width: "0.4rem", height: "0.4rem" }} />
                              </div>
                              <Col style={{
                                display: 'flex',
                                alignItems: "center"
                              }}
                              lg={4}
                              >
                                <small style={{ margin: "0", padding: "0", fontWeight: "600", fontSize: "12px" }}>{item.programName}</small>
                              </Col>
                              <Col style={{
                                display: 'flex',
                                alignItems: "center",
                                marginLeft: "1rem"
                              }}>
                                <FormControl fullWidth={true}>
                                    <ProgressBar now={temp.length} max={item.users.length} min={0} variant="info" />
                                    <FormHelperText style={{ margin: "0", display: 'flex', justifyContent: "center" }}>
                                        <small className='dashboard-user-welcome-info'><b>{temp.length}</b> dari {item.users.length} jamaah yang belum lunas</small>
                                    </FormHelperText>
                                </FormControl>
                              </Col>
                            </div>
                          </Row>
                        </div>
                      )
                    })
                  }
                </Stack>        
              </Col>
              </Row>
              </Carousel.Item>
              <Carousel.Item>
              <Row style={{ display: "flex", justifyContent: "center" }}>
              <Col style={{
                borderRadius: "8px",
                border: "0.1px solid #2E6A67",
                paddingTop: "1rem",
                paddingBottom: "2rem",
                marginRight: "0.5rem"
              }}
              lg={5}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p style={{ fontWeight: "600", textTransform: "uppercase", fontSize: "12px" }}>Jumlah yang belum dp tapi udah ikut</p>
                </div>
                <Stack direction={"column"} spacing={5}>
                  {
                    program.map((item) => {
                      let temp = []
                      temp = yesIkutNotLunas.filter((user) => {
                        if(user.ProgramId == item.id){
                          return user
                        }
                      })
                      return(
                        <div>
                          <Row>
                            <div style={{ display: 'flex', flexDirection: "row" }}>
                              <div style={{ display: "flex", alignItems: "center", marginRight: "0.5rem" }}>
                                <img src={customBullet} style={{ width: "0.4rem", height: "0.4rem" }} />
                              </div>
                              <Col style={{
                                display: 'flex',
                                alignItems: "center"
                              }}
                              lg={4}
                              >
                                <small style={{ margin: "0", padding: "0", fontWeight: "600", fontSize: "12px" }}>{item.programName}</small>
                              </Col>
                              <Col style={{
                                display: 'flex',
                                alignItems: "center",
                                marginLeft: "1rem"
                              }}>
                                <FormControl fullWidth={true}>
                                    <ProgressBar now={temp.length} max={item.users.length} min={0} variant="info" />
                                    <FormHelperText style={{ margin: "0", display: 'flex', justifyContent: "center" }}>
                                        <small className='dashboard-user-welcome-info'><b>{temp.length}</b> dari {item.users.length} jamaah yang sudah lunas</small>
                                    </FormHelperText>
                                </FormControl>
                              </Col>
                            </div>
                          </Row>
                        </div>
                      )
                    })
                  }
                </Stack>        
              </Col>
              <Col style={{
                borderRadius: "8px",
                border: "0.1px solid #2E6A67",
                paddingTop: "1rem",
                paddingBottom: "2rem",
                marginLeft: "0.5rem"
              }}
              lg={5}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p style={{ fontWeight: "600", textTransform: "uppercase", fontSize: "12px" }}>Expected Outcome</p>
                </div>
                <Stack direction={"column"} spacing={5}>
                  {
                    program.map((item) => {
                      let temp = []
                      temp = pendatapan.filter((user) => {
                        if(user.ProgramId == item.id){
                          return user
                        }
                      })
                      return(
                        <div>
                          <Row>
                            <div style={{ display: 'flex', flexDirection: "row" }}>
                              <div style={{ display: "flex", alignItems: "center", marginRight: "0.5rem" }}>
                                <img src={customBullet} style={{ width: "0.4rem", height: "0.4rem" }} />
                              </div>
                              <Col style={{
                                display: 'flex',
                                alignItems: "center"
                              }}
                              lg={4}
                              >
                                <small style={{ margin: "0", padding: "0", fontWeight: "600", fontSize: "12px" }}>{item.programName}</small>
                              </Col>
                              <Col style={{
                                display: 'flex',
                                alignItems: "center",
                                marginLeft: "1rem"
                              }}>
                                <FormControl fullWidth={true}>
                                    {/* <ProgressBar now={temp[0].pendapatan} max={temp[0].pendapatan} min={0} variant="info" /> */}
                                    <FormHelperText style={{ margin: "0", display: 'flex', justifyContent: "center" }}>
                                        <small className='dashboard-user-welcome-info'><b>{temp[0].pendapatan == 0 ? formatRupiah(item.price) : formatRupiah(temp[0].pendapatan)}</b> Yang diharapkan</small>
                                    </FormHelperText>
                                </FormControl>
                              </Col>
                            </div>
                          </Row>
                        </div>
                      )
                    })
                  }
                </Stack>        
              </Col>
              </Row>
              </Carousel.Item>
              <Carousel.Item>
              <Row style={{ display: "flex", justifyContent: "center" }}>
              <Col style={{
                borderRadius: "8px",
                border: "0.1px solid #2E6A67",
                paddingTop: "1rem",
                paddingBottom: "2rem",
                marginRight: "0.5rem"
              }}
              lg={5}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p style={{ fontWeight: "600", textTransform: "uppercase", fontSize: "12px" }}>total angsuran dan pembayaran yang sudah masuk</p>
                </div>
                <Stack direction={"column"} spacing={5}>
                  {
                    program.map((item) => {
                      let temp = []
                      temp = totalAngsuran.filter((user) => {
                        if(user.ProgramId == item.id){
                          return user
                        }
                      })
                      return(
                        <div>
                          <Row>
                            <div style={{ display: 'flex', flexDirection: "row" }}>
                              <div style={{ display: "flex", alignItems: "center", marginRight: "0.5rem" }}>
                                <img src={customBullet} style={{ width: "0.4rem", height: "0.4rem" }} />
                              </div>
                              <Col style={{
                                display: 'flex',
                                alignItems: "center"
                              }}
                              lg={4}
                              >
                                <small style={{ margin: "0", padding: "0", fontWeight: "600", fontSize: "12px" }}>{item.programName}</small>
                              </Col>
                              <Col style={{
                                display: 'flex',
                                alignItems: "center",
                                marginLeft: "1rem"
                              }}>
                                <FormControl fullWidth={true}>
                                    <ProgressBar now={temp[0].totalPaid} max={temp[0].expected} min={0} variant="info" />
                                    <FormHelperText style={{ margin: "0", display: 'flex', justifyContent: "center" }}>
                                        <small className='dashboard-user-welcome-info'><b>{formatRupiah(temp[0].totalPaid)}</b> / {formatRupiah(temp[0].expected)} yang sudah terbayarkan</small>
                                    </FormHelperText>
                                </FormControl>
                              </Col>
                            </div>
                          </Row>
                        </div>
                      )
                    })
                  }
                </Stack>        
              </Col>
              <Col style={{
                borderRadius: "8px",
                border: "0.1px solid #2E6A67",
                paddingTop: "1rem",
                paddingBottom: "2rem",
                marginLeft: "0.5rem"
              }}
              lg={5}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p style={{ fontWeight: "600", textTransform: "uppercase", fontSize: "12px" }}>Total kekurangan angsuran per program</p>
                </div>
                <Stack direction={"column"} spacing={5}>
                  {
                    program.map((item) => {
                      let temp = []
                      temp = leftOver.filter((user) => {
                        if(user.ProgramId == item.id){
                          return user
                        }
                      })
                      return(
                        <div>
                          <Row>
                            <div style={{ display: 'flex', flexDirection: "row" }}>
                              <div style={{ display: "flex", alignItems: "center", marginRight: "0.5rem" }}>
                                <img src={customBullet} style={{ width: "0.4rem", height: "0.4rem" }} />
                              </div>
                              <Col style={{
                                display: 'flex',
                                alignItems: "center"
                              }}
                              lg={4}
                              >
                                <small style={{ margin: "0", padding: "0", fontWeight: "600", fontSize: "12px" }}>{item.programName}</small>
                              </Col>
                              <Col style={{
                                display: 'flex',
                                alignItems: "center",
                                marginLeft: "1rem"
                              }}>
                                <FormControl fullWidth={true}>
                                    <ProgressBar now={temp[0].leftOver} max={temp[0].expectedOutput} min={0} variant="info" />
                                    <FormHelperText style={{ margin: "0", display: 'flex', justifyContent: "center" }}>
                                        <small className='dashboard-user-welcome-info'><b>{formatRupiah(temp[0].leftOver)}</b> / {formatRupiah(temp[0].expectedOutput)} yang masih kurang</small>
                                    </FormHelperText>
                                </FormControl>
                              </Col>
                            </div>
                          </Row>
                        </div>
                      )
                    })
                  }
                </Stack>        
              </Col>
              </Row>
              </Carousel.Item>
            </Carousel>
          </Row>
        </div>
        <div className='table-container'>
            <TableTransaksi/>
        </div>
    </div>
  )
}
