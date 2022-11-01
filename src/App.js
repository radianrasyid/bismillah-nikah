import React from "react";
import "./custom.scss";
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
import DashboardUser from "./Pages/Users/DashboardUser";
import Rewards from "./Pages/Users/Rewards";
import MyNetworks from "./Pages/Users/MyNetworks";
import TourPackage from "./Pages/packages/TourPackage";
import TourPackageDetail from "./Pages/packages/TourPackageDetail";
import EmployeeNode from "./EmployeeNode";
import RegisterRef from "./Pages/Users/RegisterRef";
import AdminTransaksi from "./Pages/Users/ADMIN/AdminTransaksi";
import PinPage from "./Pages/Users/ADMIN/PinPage";
import EmployeeNodeAll from "./EmployeeNodeAll";
import AdminTree from "./Pages/Users/ADMIN/AdminTree";
import MyProfilePage from "./Pages/Users/MyProfilePage";
import AboutUs from "./Pages/AboutUs";
import UserDetailAdmin from "./Pages/Users/ADMIN/UserDetailAdmin";
import MyPins from "./Pages/Users/MyPins";
import TransactionUser from "./Pages/Users/TransactionUser";


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
      <Route path="/code/:id" element={<RegisterRef/>}/>
      
      {/* ROUTING USER */}
      <Route path="/user" element={<NavbarUser props={<UserProfile/>}/>}/>
      <Route path="/:id" element={<NavbarUser props={<EmployeeNode/>}/>}/>
      <Route path="/user-edit" element={<NavbarUser props={<EditUser/>}/>}/>
      <Route path="/admin-dashboard" element={<SidebarAdmin slug={"Dashboard"} props={<AdminProfile/>}/>}/>
      <Route path="/admin-products" element={<SidebarAdmin slug={"Products"} props={<Products/>}/>}/>
      <Route path="/admin-rewards" element={<SidebarAdmin slug={"Reward & Komisi"} props={<RewardsBonuses/>}/>}/>
      <Route path="/admin-transactions" element={<SidebarAdmin slug={"Transaksi"} props={<AdminTransaksi/>}/>}/>
      <Route path="/admin-networks" element={<SidebarAdmin slug={"Pohon Jaringan"} props={<AdminTree/>}/>}/>
      <Route path="/admin-pins" element={<SidebarAdmin slug={"Pins"} props={<PinPage/>}/>}/>
      <Route path="/dashboard" element={<SidebarUser slug={"Dashboard"} props={<DashboardUser/>}/>}/>
      <Route path="/transaction" element={<SidebarUser slug={"Transaction"} props={<TransactionUser/>}/>}/>
      <Route path="/myprofile" element={<SidebarUser slug={"My Profile"} props={<MyProfilePage/>}/>}/>
      <Route path="/rewards" element={<SidebarUser slug={"Rewards"} props={<Rewards/>}/>}/>
      <Route path="/networks" element={<SidebarUser slug={"Mitra Saya"} props={<MyNetworks/>}/>}/>
      <Route path="/pins" element={<SidebarUser slug={"Pins"} props={<MyPins/>}/>}/>

      {/* ADMIN */}
      <Route path="/userdetail/:id" element={<SidebarAdmin slug={"User Detail"} props={<UserDetailAdmin/>}/>}/>

      {/* ABOUT US */}
      <Route path="/about" element={<Navbar props={<AboutUs/>}/>}/>

      {/* ROUTING PRODUK */}
      <Route path="/tourpackages" element={<Navbar props={<TourPackage/>}/>}/>
      <Route path="/tourpackages/:id" element={<Navbar props={<TourPackageDetail/>}/>}/>

      {/* TETS */}
      <Route path="/test" element={<EmployeeNode/>}/>
      <Route path="/test-org" element={<EmployeeNodeAll/>}/>
    </Routes>
  );
}

export default App;
