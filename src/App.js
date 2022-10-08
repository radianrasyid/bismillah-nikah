import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import "./Pages/assets/bs/css/bootstrap.min.css";
import "./Pages/assetsUser/css/bootstrap.min.css";
import "./Pages/assetsUser/css/all.min.css"
import "./Pages/assets/fs/css/all.min.css";
import "./Pages/assets/jquery-ui/jquery-ui.min.css";
import "./Pages/assets/vendors/slick/slick.css";
import "./Pages/assets/vendors/slick/slick-theme.css";
// import "./Pages/assets/css/style.css"
import "./custom.css";
// import "./Pages/assets/css/flight.css"
import "./Pages/assets/css/flight.css.map";
import "./Pages/assets/css/hotel.css.map";
import "./Pages/assets/css/all.min.css"
import Navbar from "./Pages/universal/Navbar";
import Homepage from "./Pages/homepage";
import Register from "./Pages/Users/Register";
import Login from "./Pages/Users/Login";
import UserProfile from "./Pages/Users/userProfile";
import NavbarUser from "./Pages/universal/NavbarUser";
import "./styleUser.css"
import "./style.scss"
import EditUser from "./Pages/Users/EditUser";
import SidebarAdmin from "./Pages/universal/SidebarAdmin";
import AdminProfile from "./Pages/Users/ADMIN/AdminProfile";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar props={<Homepage/>}/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/user" element={<NavbarUser props={<UserProfile/>}/>}/>
      <Route path="/user-edit" element={<NavbarUser props={<EditUser/>}/>}/>
      <Route path="/admin-dashboard" element={<SidebarAdmin props={<AdminProfile/>}/>}/>
    </Routes>
  );
}

export default App;
