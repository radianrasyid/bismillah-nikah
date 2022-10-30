import React from 'react'
import { Row, Col, Form, Card } from 'react-bootstrap'; 
import { Fab, Popover, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { DiGitPullRequest } from "react-icons/di";
import { MdInput } from "react-icons/md";
import { TbFileReport } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Tab, styled } from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProgramTabs from './components/ProgramTabs';
import { useParams } from 'react-router-dom';
import { setUserData } from '../../../redux/optional/userSlice';
import TransactionTabs from './components/TransactionTabs';
import RewardTabs from './components/RewardTabs';

const tabCustom = styled(Tab)(({theme}) => ({
  textTransform: "none",
  '&.Mui-selected': {
    backgroundColor: 'transparent'
  }
}))

export default function UserDetailAdmin() {

    const { id } = useParams();
    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.auth)
    const currentData = useSelector((state) => state.user.data);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [value, setValue] = React.useState('1')

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const handleChange = (e, newValue) => {
      setValue(newValue)
    }

    const fetchData = async(e) => {
      await fetch(`https://umrohwebsite.herokuapp.com/api/v1/userone/${id}`, {
        method: "GET",
        mode: 'cors',
        headers: {
          'Authorization': `Bearer ${currentUser.token}`
        }
      }).then(async(res) => {
        let hasil = await res.json();
        dispatch(setUserData({
          data: hasil.data
        }))
      })
    }

    const open = Boolean(anchorEl);
    const iduser = open ? 'simple-popover' : undefined;

    React.useEffect(() => {
      fetchData()
    }, [])
  
    if(currentData !== null){
      return (
        <div>
            <Row>
                <Col className='user-detail-main-card' lg={8}>
                  <div className='mb-3'>
                    <Row className='mb-3'>
                      <Col>
                        <p className='ud-user-name'>
                          {currentData.firstName} {currentData.lastName}
                        </p>
                      </Col>
                      <Col style={{ display: "flex", justifyContent: "right" }}>
                        <div>
                        <Fab color="primary" variant="extended" aria-label="add" sx={{ zIndex: "9999", }} size="medium" onClick={handleClick}>
                        <SettingsSuggestIcon sx={{ mr: 1 }}/> Actions
                    </Fab>
                    <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                    >
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                        >
                            <MenuItem>
                                <ListItemIcon sx={{ mr: -1.5 }}>
                                    <DiGitPullRequest style={{ transform: "scale(1.2)", marginRight: "-1rem"}}/>
                                </ListItemIcon>
                                <ListItemText>
                                    Jadikan Leader
                                </ListItemText>
                            </MenuItem>
                        </Menu>
                    </Popover>
                        </div>
                      </Col>
                    </Row>
    
                    <Row>
                      <Col>
                          <div>
                            <small className='ud-userinfo-title'>Nomor Telepon</small>
                            <small>{currentData.phoneNumber}</small>
                          </div>
                      </Col>
                      <Col>
                          <div>
                            <small className='ud-userinfo-title'>Kota</small>
                            <small>{currentData.city}</small>
                          </div>
                      </Col>
                      <Col>
                          <div>
                            <small className='ud-userinfo-title'>Umur</small>
                            <small>{currentData.age}</small>
                          </div>
                      </Col>
                      <Col>
                          <div>
                            <small className='ud-userinfo-title'>Status</small>
                            <small>
                              {
                                currentData.status == 0 ? (<p>Tidak Aktif</p>) : (
                                  <>
                                  {
                                    currentData.status == 1 ? (<p>Belum Lunas</p>) : (
                                      <>
                                        {
                                          currentData.status == 2 ? (<p>Lunas</p>) : (<></>)
                                        }
                                      </>
                                    )
                                  }
                                  </>
                                )
                              }
                            </small>
                          </div>
                      </Col>
                      <Col>
                          <div>
                            <small className='ud-userinfo-title'>Email</small>
                            <small>{currentData.email}</small>
                          </div>
                      </Col>
                    </Row>
                  </div>
    
                  <div>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Program" value="1" sx={{
                          backgroundColor: "white",
                          borderRadius: "8px",
                          textTransform: "none",
                          fontWeight: "600",
                          '&.Mui-selected': {
                            backgroundColor: "transparent",
                            color: "#070707"
                          },
                          '&.MuiTabs-indicator':{
                            display:'none'
                          }
                        }}/>
                        <Tab label="Reward & Bonus" value="2" sx={{
                          backgroundColor: "white",
                          borderRadius: "8px",
                          textTransform: "none",
                          fontWeight: "600",
                          '&.Mui-selected': {
                            backgroundColor: "transparent",
                            color: "#070707"
                          },
                          '&.MuiTabs-indicator':{
                            display:'none'
                          }
                        }}/>
                      </TabList>
                    </Box>
                    <TabPanel value="1">
                      <ProgramTabs/>
                    </TabPanel>
                    <TabPanel value="2">
                      <RewardTabs/>
                    </TabPanel>
                  </TabContext>
                  </div>         
                </Col>
                <Col style={{ backgroundColor: "#f0f0f0", borderRadius: "8px", padding: "2rem 2rem", marginLeft: "1rem" }}>
                    <div className='mb-3' style={{ backgroundColor: "white", padding: "2rem 2rem", borderRadius: "8px" }}>
                        <p>Foto Ktp</p>
                        <img src={currentData.image_id} />
                    </div>
    
                    <div className='mb-3' style={{ backgroundColor: "white", padding: "2rem 2rem", borderRadius: "8px" }}>
                        <p>Foto Kartu Keluarga</p>
                        <img src={currentData.image_family} />
                    </div>
    
                    <div className='mb-3' style={{ backgroundColor: "white", padding: "2rem 2rem", borderRadius: "8px" }}>
                        <p>Foto Passport</p>
                        <img src={currentData.passportImage} />
                    </div>
                </Col>
            </Row>
        </div>
      )
    }
}
