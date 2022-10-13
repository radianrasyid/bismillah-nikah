import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
// import "./Pages/assets/bs/css/bootstrap.min.css";
// import "./Pages/assetsUser/css/bootstrap.min.css";
import "./Pages/assets/vendors/fontawesome/css/all.min.css";
import "./Pages/assets/jquery-ui/jquery-ui.min.css";
import "./Pages/assetsUser/css/all.min.css"
import "./Pages/assets/fs/css/all.min.css";
import "./Pages/assets/vendors/slick/slick.css";
import "./Pages/assets/vendors/slick/slick-theme.css";
import "./Pages/assets/css/hotel.css.map";
import "./Pages/assets/css/all.min.css"
import "./styleUser.css"
import "./style.scss"
import "./custom.css";
import Aos from "aos";
import "aos/dist/aos.css"
import Navbar from "./Pages/universal/Navbar";
import Homepage from "./Pages/homepage";
import Register from "./Pages/Users/Register";
import Login from "./Pages/Users/Login";
import UserProfile from "./Pages/Users/userProfile";
import NavbarUser from "./Pages/universal/NavbarUser";
import EditUser from "./Pages/Users/EditUser";
import SidebarAdmin from "./Pages/universal/SidebarAdmin";
import AdminProfile from "./Pages/Users/ADMIN/AdminProfile";
import SidebarUser from "./Pages/universal/SidebarUser";
import Products from "./Pages/Users/ADMIN/Products";
import RewardsBonuses from "./Pages/Users/ADMIN/RewardsBonuses";


function App() {
  React.useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Navbar props={<Homepage/>}/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/user" element={<NavbarUser props={<UserProfile/>}/>}/>
      <Route path="/user-edit" element={<NavbarUser props={<EditUser/>}/>}/>
      <Route path="/admin-dashboard" element={<SidebarAdmin slug={"Dashboard"} props={<AdminProfile/>}/>}/>
      <Route path="/admin-products" element={<SidebarAdmin slug={"Products"} props={<Products/>}/>}/>
      <Route path="/admin-rewards" element={<SidebarAdmin slug={"Rewards & Bonus"} props={<RewardsBonuses/>}/>}/>
      <Route path="/dashboard" element={<SidebarUser props={<AdminProfile/>}/>}/>
    </Routes>
  );
}

export default App;
