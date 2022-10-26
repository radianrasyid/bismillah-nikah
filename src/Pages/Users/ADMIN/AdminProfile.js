import React from 'react'
import TableReferred from '../components/TableReferred'
import TableGroupMember from '../components/TableGroupMember'
import TableAllUser from '../components/TableAllUser'
import { Card, CardActions, CardContent, Button, Box, Typography, Stack, IconButton } from '@mui/material';
import { FormControl, Select, MenuItem, styled, InputBase } from '@mui/material';
import { FaWallet, FaMoneyBillWaveAlt } from "react-icons/fa";
import { BsThreeDotsVertical, BsFillPersonFill, BsFillCalendarFill } from "react-icons/bs"
import { MdGroups } from 'react-icons/md';
import { TiLockOpen } from "react-icons/ti"
import { Col, Row } from 'react-bootstrap';
import Chart from "react-apexcharts";
import TableRecentMembers from '../components/TableRecentMembers';
import TableUserStatus from '../components/TableUserStatus';
import { useSelector } from 'react-redux';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: "8px",
      position: 'relative',
      backgroundColor: "rgba(249, 249, 249, 1)",
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: "8px",
        borderColor: '#80bdff',
      },
    },
  }));

export default function AdminProfile() {

    const [chart, setChart] = React.useState({
        options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            },
            stroke: {
                curve: 'smooth',
                width: 2
            },
            chart: {
                toolbar: {
                    show: false
                }
            },
          },
          series: [
            {
              name: "series-1",
              data: [0, 950, 2000, 1200, 4000, 3700, 4100, 3500]
            }
          ]
    })
    const [chartBar, setChartBar] = React.useState({
        options: {
            colors: ["rgba(26, 60, 64, 0.9)", "rgba(152, 193, 255, 1)"],
            chart: {
              id: "basic-bar"
            },
            legend: {
                show: true,
                showForSingleSeries: true,
                position: "top",
                horizontalAlign: "center",
                floating: true,
                fontFamily: "Inter",
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
            },
            stroke: {
                curve: 'smooth',
                width: 2
            },
            chart: {
                toolbar: {
                    show: false
                },
            },
            dataLabels:{
                enabled: false,
            }
          },
          series: [
            {
              name: "series-1",
              data: [0, 950, 2000, 1200, 4000, 3700, 4100, 3500],
            },
            {
              name: "series-2",
              data: [0, 1000, 850, 1500, 3700, 3700, 2200, 4000]
            }
          ],
    })

    const [age, setAge] = React.useState(0);
    const [userReferred, setUserReferred] = React.useState([]);
    const [activeMembers, setActiveMembers] = React.useState([]);
    const [users, setUsers] = React.useState([]);
    const [eligibleUsers, setEligibleUsers] = React.useState([]);
    const handleChange = (event) => {
        setAge(event.target.value);
      };

    const currentUser = useSelector((state) => state.auth);

    const fetchData = async(e) => {
        await fetch("http://localhost:8000/api/v1/user/getall", {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${currentUser.token}`
            }
        }).then(async(res) => {
            let hasil = await res.json();
            let hasildata = await hasil.data;

            let active = await hasildata.map((item) => {
                if(item.status !== 0){
                    return item
                }
            });

            let eligible = await hasildata.map((item) => {
                if(item.referredCode){
                    
                }
            })

        })
    };

    React.useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
            <script src="https://cdn.jsdelivr.net/npm/react-apexcharts"></script>
          <div className="row mb-3">
            {/* <!-- Item --> */}
            <div className="col-xl-3 col-sm-3">
                <Card className='card-admin-dashboard br-8' sx={{ padding: "0.1rem 0.1rem !important"}}>
                    <CardContent sx={{ paddingBottom: "0 !important"}}>
                        <Row>
                            <Col>
                                <div>
                                    <div className='card-admin-dashboard-icon mb-3'>
                                        <FaWallet/>
                                    </div>
                                    <div>
                                        <h6>User Referred</h6>
                                        <p className='card-admin-dashboard-number'>12.323</p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <div style={{ position: "relative"}}>
                                        <IconButton className="button-card-admin-dashboard">
                                            <BsThreeDotsVertical/>
                                        </IconButton>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </CardContent>
                </Card>
            </div>
            {/* <!-- Item --> */}
            <div className="col-xl-3 col-sm-3">
                <Card className='card-admin-dashboard br-8' sx={{ padding: "0.1rem 0.1rem !important"}}>
                    <CardContent sx={{ paddingBottom: "0 !important"}}>
                        <Row>
                            <Col>
                                <div>
                                    <div className='card-admin-dashboard-icon mb-3'>
                                        <MdGroups/>
                                    </div>
                                    <div>
                                        <h6>Active Members</h6>
                                        <p className='card-admin-dashboard-number'>12.323</p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <div style={{ position: "relative"}}>
                                        <IconButton className="button-card-admin-dashboard">
                                            <BsThreeDotsVertical/>
                                        </IconButton>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </CardContent>
                </Card>
            </div>
            {/* <!-- Item --> */}
            <div className="col-xl-3 col-sm-3">
                <Card className='card-admin-dashboard br-8' sx={{ padding: "0.1rem 0.1rem !important"}}>
                    <CardContent sx={{ paddingBottom: "0 !important"}}>
                        <Row>
                            <Col>
                                <div>
                                    <div className='card-admin-dashboard-icon mb-3'>
                                        <BsFillPersonFill/>
                                    </div>
                                    <div>
                                        <h6>Users</h6>
                                        <p className='card-admin-dashboard-number'>12.323</p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <div style={{ position: "relative"}}>
                                        <IconButton className="button-card-admin-dashboard">
                                            <BsThreeDotsVertical/>
                                        </IconButton>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </CardContent>
                </Card>
            </div>
            <div className="col-xl-3 col-sm-3">
                <Card className='card-admin-dashboard br-8' sx={{ padding: "0.1rem 0.1rem !important"}}>
                    <CardContent sx={{ paddingBottom: "0 !important"}}>
                        <Row>
                            <Col>
                                <div>
                                    <div className='card-admin-dashboard-icon mb-3'>
                                        <TiLockOpen/>
                                    </div>
                                    <div>
                                        <h6>Eligible</h6>
                                        <p className='card-admin-dashboard-number'>12.323</p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <div style={{ position: "relative"}}>
                                        <IconButton className="button-card-admin-dashboard">
                                            <BsThreeDotsVertical/>
                                        </IconButton>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </CardContent>
                </Card>
            </div>
        </div>
        {/* <div className="row">
            <div className="col-lg-6 col-sm-6">
                <div className="dashboard-box table-opp-color-box">
                    <Row>
                        <Col>
                            <h4>Transaksi</h4>
                        </Col>
                        <Col className='go-right'>
                        <Row>
                            <Col>
                                <FormControl variant="standard">
                                    <Select
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"
                                    value={age}
                                    onChange={handleChange}
                                    input={<BootstrapInput />}
                                    startAdornment={<FaMoneyBillWaveAlt/>}
                                    >
                                    <MenuItem value={0}>Expenses</MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col>
                                <FormControl variant="standard">
                                    <Select
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"
                                    value={age}
                                    onChange={handleChange}
                                    input={<BootstrapInput />}
                                    startAdornment={<BsFillCalendarFill/>}
                                    >
                                    <MenuItem value={0}>Expenses</MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                    <div className='mui-table-container'>
                        <Chart
                        options={chart.options}
                        series={chart.series}
                        type="line"
                        />
                    </div>
                </div>
            </div> 
            <div className="col-lg-6 col-sm-6">
                <div className="dashboard-box table-opp-color-box">
                    <Row>
                        <Col>
                            <h4>Referral</h4>
                        </Col>
                        <Col className='go-right'>
                        <Row>
                            <Col>
                                <FormControl variant="standard">
                                    <Select
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"
                                    value={age}
                                    onChange={handleChange}
                                    input={<BootstrapInput />}
                                    startAdornment={<FaMoneyBillWaveAlt/>}
                                    >
                                    <MenuItem value={0}>Expenses</MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col>
                                <FormControl variant="standard">
                                    <Select
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"
                                    value={age}
                                    onChange={handleChange}
                                    input={<BootstrapInput />}
                                    startAdornment={<BsFillCalendarFill/>}
                                    >
                                    <MenuItem value={0}>Expenses</MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                    <div className='mui-table-container'>
                        <Chart
                        options={chartBar.options}
                        series={chartBar.series}
                        type="bar"
                        />
                    </div>
                </div>
            </div> 
        </div> */}
        <div className="row">
            <div className="col-lg-6">
                <div className="dashboard-box table-opp-color-box">
                    <h4>Recent Members</h4>
                    <div className='mui-table-container'>
                        <TableRecentMembers/>
                    </div>
                </div>
            </div> 
            <div className="col-lg-6">
                <div className="dashboard-box table-opp-color-box">
                    <h4>User Status</h4>
                    <div className='mui-table-container'>
                        <TableUserStatus/>
                    </div>
                </div>
            </div> 
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="dashboard-box">
                    <h4>Product</h4>
                    <div className='mui-table-container'>
                        <TableAllUser/>
                    </div>
                </div>
            </div>  
        </div>
        {/* <div className="row">
            <div className="col-lg-4">
                <div className="dashboard-box chart-box">
                    <h4>Site Traffic</h4>
                    <div id="chartContainer" style={{ height: "250px", width: "100%" }}></div>
                </div>
            </div>
    
            <div className="col-lg-4">
                <div className="dashboard-box chart-box">
                    <h4>Bar Chart</h4>
                    <div id="barchart" style={{ height: "250px", width: "100%" }}></div>
                </div>
            </div>
    
            <div className="col-lg-4 chart-box">
                <div className="dashboard-box">
                    <h4>Search Engine</h4>
                    <div id="piechart" style={{ height: "250px", width: "100%" }}></div>
                </div>
            </div>
        </div> */}
        </div>
      )
}
