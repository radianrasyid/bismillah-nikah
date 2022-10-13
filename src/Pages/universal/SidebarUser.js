import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
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
import { BsBoxSeam, BsGiftFill, BsFillLockFill, BsFillPersonFill, BsFillHddNetworkFill } from "react-icons/bs"
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io"
import { ImTree, ImProfile } from "react-icons/im"
import { Collapse } from '@mui/material';

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

export default function SidebarUser({props}) {

    const router = useLocation()
    const location = router.pathname;  

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
                    {icon}
                </ListItemIcon>
                <ListItemText className='sidebar-text' primary={primary} sx={{ opacity: open ? 1 : 0 }} />
                { anchor ? icon1 : icon2 }
                </ListItemButton>
            </ListItem>
    )
    const ListSubItemCustomized = ({primary, icon, loc, actClick, anchor, icon1, icon2}) => (
            <ListItem disablePadding sx={{ pl: 4 }}
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
                    {icon}
                </ListItemIcon>
                <ListItemText className='sidebar-text' primary={primary} sx={{ opacity: open ? 1 : 0 }} />
                { anchor ? icon1 : icon2 }
                </ListItemButton>
            </ListItem>
    )

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openMember, setOpenMember] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleClick = () => setOpenMember(!openMember);

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
            {
                open == true ? (<ChevronLeftIcon/>) : (<ChevronRightIcon />)
            }
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItemCustomized primary={"User"} icon={<BsFillPersonFill className='color-black'/>} loc={"/dashboard" || "/networks" || "rewards"} actClick={handleClick} 
            anchor={openMember} icon1={<IoMdArrowDropup className='color-black'/>} icon2={<IoMdArrowDropdown className='color-black'/>}
            />
            <Collapse in={openMember} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListSubItemCustomized primary={"Dashboard"} icon={<MdSpaceDashboard className='color-black'/>} loc="/dashboard" />
                    <ListSubItemCustomized primary={"Jaringan"} icon={<BsFillHddNetworkFill className='color-black'/>} loc="/networks" />
                    <ListSubItemCustomized primary={"Reward & Bonus"} icon={<BsGiftFill className='color-black'/>} loc="/rewards" />
                </List>
            </Collapse>
            <ListItemCustomized primary={"Profil"} icon={<ImProfile className='color-black'/>} loc="/profile" />
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div className='sidebar-enabled-main'>
            {props}
        </div>
      </Box>
    </Box>
  );
}
