import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Menu, MenuItem, Tooltip, Container, Button } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import logo from "../../Pages/assets/images/logo-hrbs.jpg"
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { MdSpaceDashboard, MdCardMembership } from "react-icons/md"
import { GrTransaction } from "react-icons/gr";
import { BsBoxSeam, BsGiftFill, BsFillLockFill } from "react-icons/bs"
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io"
import { GiSwipeCard } from "react-icons/gi"
import { ImTree } from "react-icons/im"
import { Collapse, Stack } from '@mui/material';
import { Col, Row } from 'react-bootstrap';
import { logOut } from '../../redux/feature/auth/authSlice';
import { useDispatch } from 'react-redux';

const drawerWidth = 240;

// const ListItemCustomized = styled(ListItem)({
//     '&:hover':{
//         backgroundColor: "#f7a440"
//     },
//     '&:active':{
//         backgroundColor: "#f7a440"
//     }
// })

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.soft,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function SidebarAdmin({props, slug}) {

    const dispatch = useDispatch()

    const router = useLocation()
    const location = router.pathname;
    const direct = useNavigate();  

    const ListItemCustomized = ({primary, icon, loc, actClick, anchor, icon1, icon2}) => (
            <ListItem disablePadding sx={{ display: 'block' }}
            className={location === loc ? 'active-sidebar' : ''}
            >
                <ListItemButton
                onClick={actClick}
                sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                }}
                >
                <ListItemIcon
                    sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    }}
                >
                    <div style={{
                        backgroundColor: "rgba(65, 125, 122, 1)",
                        padding: "1rem 1rem",
                        borderRadius: "6px",
                        color: "white"
                    }}>
                        {icon}
                    </div>
                </ListItemIcon>
                <ListItemText className='sidebar-text' primary={primary} sx={{ opacity: open ? 1 : 0 }} />
                { anchor ? icon1 : icon2 }
                </ListItemButton>
            </ListItem>
    )
    const ListItemCustomizedSub = ({primary, icon, loc, actClick, anchor, icon1, icon2}) => (
            <ListItem disablePadding sx={{ display: 'block', pl: 2 }}
            className={location === loc ? 'active-sidebar' : ''}
            >
                <ListItemButton
                onClick={actClick}
                sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                }}
                >
                <ListItemIcon
                    sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    }}
                >
                    <div style={{
                        backgroundColor: "rgba(65, 125, 122, 1)",
                        padding: "1rem 1rem",
                        borderRadius: "6px",
                        color: "white"
                    }}>
                        {icon}
                    </div>
                </ListItemIcon>
                <ListItemText className='sidebar-text' primary={primary} sx={{ opacity: open ? 1 : 0 }} />
                { anchor ? icon1 : icon2 }
                </ListItemButton>
            </ListItem>
    )

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openMember, setOpenMember] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (e) => setAnchorElUser(e.currentTarget);
  const handleCloseUserMenu = (e) => setAnchorElUser(null);
  const openUser = Boolean(anchorElUser)

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(!open);

  const handleClick = () => setOpenMember(!openMember);
  const handleDirect = (links) => direct(links)

  const handleLogOut = () => {
    dispatch(logOut())
    direct("/login")
  }


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#FFFFFF" }}>
        <Container maxWidth="xl" style={{ paddingLeft: "5rem"}}>
            <Toolbar disableGutters>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Inter',
                fontWeight: 700,
                color: '#2E6A67 !important',
                textDecoration: 'none',
                }}
            >
                <h3 style={{ color: "#2E6A67 !important"}}>{slug}</h3>
            </Typography>

            <Box sx={{ flexGrow: 0 }} className="ms-auto">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={logo} />
                </IconButton>
                <Menu
                anchorEl={anchorElUser}
                open={openUser}
                onClose={handleCloseUserMenu}
                onClick={handleCloseUserMenu}
                >
                    <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>My account</MenuItem>
                    <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                </Menu>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Row>
            <Col>
                {
                    // open == true ? (<img src={logo} style={{ width: "5rem", height: "5rem" }} />) : (<></>)
                    open == true ? (<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h2 style={{ marginBottom: "0" }}>HRBS</h2>
                  </div>) : (<></>)
                }
            </Col>
            <Col className={open == true ? "go-hard-middle" : ""}>
                <IconButton onClick={handleDrawerClose}>
                    {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
                    {
                        open == true ? (<ChevronLeftIcon/>) : (<ChevronRightIcon />)
                    }
                </IconButton>
            </Col>
          </Row>
        </DrawerHeader>
        <Divider />
        <List>
            {/* <ListItemCustomized disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <MdSpaceDashboard />
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItemCustomized> */}
            <ListItemCustomized primary={"Dashboard"} icon={<MdSpaceDashboard/>} loc="/admin-dashboard" actClick={() => direct("/admin-dashboard")} />
            <ListItemCustomized primary={"Transaksi"} icon={<GiSwipeCard/>} loc="/admin-transactions" actClick={() => direct("/admin-transactions")} />
            <ListItemCustomized primary={"Member"} icon={<MdCardMembership/>} loc="/admin-members" actClick={handleClick} 
            anchor={openMember} icon1={<IoMdArrowDropup/>} icon2={<IoMdArrowDropdown/>}
            />
            <Collapse in={openMember} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemCustomizedSub primary={"Member"} icon={<GiSwipeCard/>} loc="/admin-members" actClick={() => direct("/admin-members")} />
                  <ListItemCustomizedSub primary={"Pohon Jaringan"} icon={<GiSwipeCard/>} loc="/admin-networks" actClick={() => direct("/admin-networks")} />
                </List>
            </Collapse>
            <ListItemCustomized primary={"Produk"} icon={<BsBoxSeam/>} loc="/admin-products" actClick={() => direct("/admin-products")} />
            <ListItemCustomized primary={"Reward & Komisi"} icon={<BsGiftFill/>} loc="/admin-rewards" actClick={() => direct("/admin-rewards")} />
            <ListItemCustomized primary={"Pin"} icon={<BsFillLockFill/>} loc="/admin-pins" actClick={() => direct("/admin-pins")} />
            <ListItemCustomized primary={"Home"} icon={<BsFillLockFill/>} loc="/admin-pins" actClick={() => direct("/")} />
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div className='sidebar-enabled-main' style={{ marginTop: "4rem"}}>
            {props}
        </div>
      </Box>
    </Box>
  );
}
