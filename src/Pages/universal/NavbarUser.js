import React from 'react'
import travelogo from "../assets/images/travele-logo.png"
import travelogo1 from "../assets/images/travele-logo1.png"
import img1 from "../assets/images/img1.jpg"
import img5 from "../assets/images/img5.jpg"
import { Button, IconButton, Menu, MenuItem, ListItemIcon, Divider, Typography, Avatar, Box, Tooltip } from "@mui/material";
import { BsFillPersonFill } from "react-icons/bs"
import { FiSettings, FiLogOut } from "react-icons/fi"
import "../../style.css"
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

export default function NavbarUser({props}) {

    const direct = useNavigate();

    let currentUser = useSelector((state) => state.auth)

   // PAGE STATES
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (e) => setAnchorEl(e.currentTarget);
   const handleClose = (e) => setAnchorEl(null);
  
   if(currentUser.token !== null){
    return (
        <>
        <script src='../assetsUser/js/jquery-3.2.1.min.js' />
             <script src='https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js' />
             <script src='../assetsUser/js/bootstrap.min.js' />
             <script src='../assetsUser/js/canvasjs.min.js' />
             <script src='../assetsUser/js/chart.js' />
             <script src='../assetsUser/js/counterup.min.js' />
             <script src='../assetsUser/js/jquery.slicknav.js' />
             <script src='../assetsUser/js/dashboard-custom.js' />
          <div className="dashboard-header sticky-header">
                    <div className="content-left  logo-section pull-left">
                        <h1><a href="/">Home</a></h1>
                    </div>
                    <div className="heaer-content-right pull-right">
                        <div className="search-field">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control br-8" id="search" placeholder="Search Now"/>
                                    <a href="#"><span className="search_btn"><i className="fa fa-search" aria-hidden="true"></i></span></a>
                                </div>
                            </form>
                        </div>
                        <div className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown">
                                <div className="dropdown-item">
                                    <i className="far fa-bell"></i>
                                    <span className="notify">3</span>
                                </div>
                            </a>
                            <div className="dropdown-menu notification-menu">
                                <h4> 3 Messages</h4>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <div className="list-img">
                                                <img src="assets/images/comment4.jpg" alt=""/>
                                            </div>
                                            <div className="notification-content">
                                                <p>You have a notification.</p>
                                                <small>2 hours ago</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="list-img">
                                                <img src="assets/images/comment5.jpg" alt=""/>
                                            </div>
                                            <div className="notification-content">
                                                <p>You have a notification.</p>
                                                <small>2 hours ago</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="list-img">
                                                <img src="assets/images/comment6.jpg" alt=""/>
                                            </div>
                                            <div className="notification-content">
                                                <p>You have a notification.</p>
                                                <small>2 hours ago</small>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <a href="#" className="all-button">See all messages</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown">
                                <div className="dropdown-item profile-sec">
                                    <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}>
                                     <Avatar sx={{ width: 32, height: 32}}>M</Avatar>
                                    </IconButton>
                                    <Menu
                                     anchorEl={anchorEl}
                                     id="account-menu"
                                     open={open}
                                     onClose={handleClose}
                                     onClick={handleClose}
                                     PaperProps={{
                                        elevation: 0,
                                        sx: {
                                           overflow: 'visible',
                                           filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                           mt: 1.5,
                                           '& .MuiAvatar-root': {
                                           width: 32,
                                           height: 32,
                                           ml: -0.5,
                                           mr: 1,
                                           },
                                           '&:before': {
                                           content: '""',
                                           display: 'block',
                                           position: 'absolute',
                                           top: 0,
                                           right: 14,
                                           width: 10,
                                           height: 10,
                                           bgcolor: 'background.paper',
                                           transform: 'translateY(-50%) rotate(45deg)',
                                           zIndex: 0,
                                           },
                                        },
                                     }}
                                     transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                     anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                     >
                                    <Link to={"/user-edit"}>
                                        <MenuItem>
                                            <Avatar /> My account
                                        </MenuItem>
                                    </Link>
                                     <Divider />
                                     <MenuItem>
                                        <ListItemIcon>
                                           <BsFillPersonFill/>
                                        </ListItemIcon>
                                        Add another account
                                     </MenuItem>
                                     <MenuItem>
                                        <ListItemIcon>
                                           <FiSettings/>
                                        </ListItemIcon>
                                        Settings
                                     </MenuItem>
                                     <MenuItem>
                                        <ListItemIcon>
                                           <FiLogOut/>
                                        </ListItemIcon>
                                        Logout
                                     </MenuItem>
                                     </Menu>
                                    <i className="fas fa-caret-down"></i>
                                </div>
                            </a>
                            <div className="dropdown-menu account-menu">
                                <ul>
                                    <li><a href="#"><i className="fas fa-cog"></i>Settings</a></li>
                                    <li><a href="#"><i className="fas fa-user-tie"></i>Profile</a></li>
                                    <li><a href="#"><i className="fas fa-key"></i>Password</a></li>
                                    <li><a href="#"><i className="fas fa-sign-out-alt"></i>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='user-page-content'>
                   {props}
                </div>
        </>
      )
   }else{
    <>
        {
            direct("/")
        }
    </>
   }
}
