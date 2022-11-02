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
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/feature/auth/authSlice';
import { AiOutlineHome } from "react-icons/ai"

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
    backgroundColor: "#FFFFFF"
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
      backgroundColor: "#FFFFFF"
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

export default function SidebarUser({props, slug}) {

    const router = useLocation()
    const location = router.pathname;
    const direct = useNavigate();  
    const dispatch = useDispatch();

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

  const theme = useTheme();
  const currentUser = useSelector((state) => state.auth);
  const [open, setOpen] = React.useState(false);
  const [openMember, setOpenMember] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [dataUser, setDataUser] = React.useState(null);

  const handleOpenUserMenu = (e) => setAnchorElUser(e.currentTarget);
  const handleCloseUserMenu = (e) => setAnchorElUser(null);
  const openUser = Boolean(anchorElUser)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleClick = () => setOpenMember(!openMember);
  const handleDirect = (links) => direct(links)

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const fetchData = async() => {
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
    fetchData();
  }, [])

  if(dataUser !== null){
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
                  color: 'inherit',
                  textDecoration: 'none',
                  }}
              >
                  {slug}
              </Typography>
  
              <Box sx={{ flexGrow: 0 }} className="ms-auto">
                  <Stack direction={"row"} spacing={2}>
                    <div>
                      <Button variant='outlined' sx={{
                        borderColor: dataUser.status == 0 ? ("#393e51") : (dataUser.status == 1 ? ("#f7d716") : ("#79f8bb")),
                        color: dataUser.status == 0 ? ("#393e51") : (dataUser.status == 1 ? ("#f7d716") : ("#79f8bb")),
                        fontWeight: "600"
                      }}>
                        {
                          dataUser.status == 0 ? "Belum Aktif" : (dataUser.status == 1 ? "Belum Lunas" : "Lunas")
                        }
                      </Button>
                    </div>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src={logo} />
                    </IconButton>
                  </Stack>
                  <Menu
                  anchorEl={anchorElUser}
                  open={openUser}
                  onClose={handleCloseUserMenu}
                  onClick={handleCloseUserMenu}
                  >
                      <MenuItem onClick={() => direct("/myprofile")}>Profile</MenuItem>
                      <MenuItem onClick={handleCloseUserMenu}>My account</MenuItem>
                      <MenuItem onClick={() => {
                        dispatch(logOut());
                        direct("/login")
                      }}>Logout</MenuItem>
                  </Menu>
              </Box>
              </Toolbar>
          </Container>
          </AppBar>
        {/* <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 700, fontSize:"28px"}}>
              {slug}
            </Typography>
  
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar> */}
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <Row>
              <Col>
                  {
                      // open == true ? (<img src={logo} style={{ width: "5rem", height: "5rem" }} />) : (<></>)
                      open == true ? (<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <h2 style={{ marginBottom: '0' }}>HRBS</h2>
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
              <ListItemCustomized primary={"Dashboard"} icon={<MdSpaceDashboard/>} loc="/dashboard" actClick={() => direct("/dashboard")} />
              <ListItemCustomized primary={"Transaction"} icon={<MdSpaceDashboard/>} loc="/transaction" actClick={() => direct("/transaction")} />
              {
                currentUser.role == 2 ? (
                  <ListItemCustomized primary={"Pins"} icon={<MdSpaceDashboard/>} loc="/pins" actClick={() => direct("/pins")} />
                ) : (null)
              }
              <ListItemCustomized primary={"Mitra Saya"} icon={<GiSwipeCard/>} loc="/networks" actClick={() => direct("/networks")} />
              <ListItemCustomized primary={"Reward & Komisi"} icon={<MdCardMembership/>} loc="/rewards" actClick={() => direct("/rewards")}/>
              <ListItemCustomized primary={"Home"} icon={<AiOutlineHome/>} loc="/rewards" actClick={() => direct("/")}/>
              {/* <Collapse in={openMember} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                          <div style={{
                          backgroundColor: "rgba(65, 125, 122, 1)",
                          padding: "1rem 1rem",
                          borderRadius: "6px",
                          color: "white"
                      }}>
                              <MdCardMembership />
                          </div>
                      </ListItemIcon>
                      <ListItemText primary="Member" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                          <div style={{
                          backgroundColor: "rgba(65, 125, 122, 1)",
                          padding: "1rem 1rem",
                          borderRadius: "6px",
                          color: "white"
                      }}>
                              <ImTree />
                          </div>
                      </ListItemIcon>
                      <ListItemText primary="Pohon Jaringan" />
                  </ListItemButton>
                  </List>
              </Collapse>
              <ListItemCustomized primary={"Produk"} icon={<BsBoxSeam/>} loc="/admin-products" actClick={() => direct("/admin-products")} />
              <ListItemCustomized primary={"Reward & Komisi"} icon={<BsGiftFill/>} loc="/admin-rewards" actClick={() => direct("/admin-rewards")} />
              <ListItemCustomized primary={"Pin"} icon={<BsFillLockFill/>} loc="/admin-pins" /> */}
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
}
