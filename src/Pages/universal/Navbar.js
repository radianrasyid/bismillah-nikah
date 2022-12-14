import React from 'react'
import travelogo from "../assets/images/travele-logo.png"
import travelogo1 from "../assets/images/travele-logo1.png"
import logo from "../assets/images/logo-hrbs.jpg"
import img1 from "../assets/images/img1.jpg"
import img5 from "../assets/images/img5.jpg"
import car from "../assetsUser/images/car.jpg"
import "../../style.css";
import { useSelector } from 'react-redux'
import { Avatar, Button, IconButton, Stack } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar({props}) {

   const direct = useNavigate();

   let currentUser = useSelector((state) => state.auth)
   console.log("INI CURRENT USER", currentUser);

      return (
         <div>
           <script src='../assets/js/jquery.js' />
              <script src='http://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js' />
              <script src='../assets/vendors/bootstrap/js/bootstrap.min.js' />
              <script src='../assets/vendors/jquery-ui/jquery-ui.min.js' />
              <script src='../assets/vendors/countdown-date-loop-counter/loopcounter.js' />
              <script src='../assets/js/jquery.counterup.js' />
              <script src='../assets/vendors/modal-video/jquery-modal-video.min.js' />
              <script src='../assets/vendors/masonry/masonry.pkgd.min.js' />
              <script src='../assets/vendors/lightbox/dist/js/lightbox.min.js' />
              <script src='../assets/vendors/slick/slick.min.js' />
              <script src='../assets/js/jquery.slicknav.js' />
              <script src='../assets/js/custom.min.js' />
           <div id="page" className="full-page">
              <header id="masthead" className="site-header header-primary">
                 {/* <!-- header html start --> */}
                 <div className="bottom-header">
                    <div className="container d-flex justify-content-between align-items-center">
                       <div className="site-identity">
                          <h1 className="site-title">
                             <a href="/">
                                <img className="white-logo" src={logo} alt="logo"/>
                                <img className="black-logo" src={logo} alt="logo"/>
                             </a>
                          </h1>
                       </div>
                       <div className="main-navigation d-none d-lg-block">
                          <nav id="navigation" className="navigation">
                             <ul>
                                <li className="menu-item-has-children">
                                   <a href="/">Home</a>
                                </li>
                                <li className="menu-item-has-children">
                                   <a href="#">Tour</a>
                                   <ul>
                                      <li>
                                         <a href="/tourpackages">Program</a>
                                      </li>
                                   </ul>
                                </li>
                                {/* <li className="menu-item-has-children">
                                   <a href="#">Pages</a>
                                   <ul>
                                      <li>
                                         <a href="about.html">About</a>
                                      </li>
                                      <li>
                                         <a href="service.html">Service</a>
                                      </li>
                                      <li>
                                         <a href="career.html">Career</a>
                                      </li>
                                      <li>
                                         <a href="career-detail.html">Career Detail</a>
                                      </li>
                                      <li>
                                         <a href="tour-guide.html">Tour Guide</a>
                                      </li>
                                      <li>
                                         <a href="gallery.html">Gallery</a>
                                      </li>
                                      <li>
                                         <a href="single-page.html">Single Page</a>
                                      </li>
                                      <li>
                                         <a href="faq.html">FAQ Page</a>
                                      </li>
                                      <li>
                                         <a href="testimonial-page.html">Testimonial Page</a>
                                      </li>
                                      <li>
                                         <a href="popup.html">Popup</a>
                                      </li>
                                      <li>
                                         <a href="search-page.html">Search Page</a>
                                      </li>
                                      <li>
                                         <a href="404.html">404 Page</a>
                                      </li>
                                      <li>
                                         <a href="comming-soon.html">Comming Soon</a>
                                      </li>
                                      <li>
                                         <a href="contact.html">Contact</a>
                                      </li>
                                      <li>
                                         <a href="wishlist-page.html">Wishlist</a>
                                      </li>
                                   </ul>
                                </li> */}
                                <li className="menu-item-has-children">
                                   <a href="#">TENTANG KAMI</a>
                                   <ul>
                                      <li>
                                         <a href="/about">Tentang Kami</a>
                                      </li>
                                      {/* <li className="menu-item-has-children">
                                         <a href="#">User</a>
                                         <ul>
                                            <li>
                                               <a href="admin/user.html">User List</a>
                                            </li>
                                            <li>
                                               <a href="admin/user-edit.html">User Edit</a>
                                            </li>
                                            <li>
                                               <a href="admin/new-user.html">New User</a>
                                            </li>
                                         </ul>
                                      </li> */}
                                      {/* <li className="menu-item-has-children">
                                         <a href="admin/db-package.html">Package</a>
                                         <ul>
                                            <li>
                                               <a href="admin/db-package-active.html">Package Active</a>
                                            </li>
                                            <li>
                                               <a href="admin/db-package-pending.html">Package Pending</a>
                                            </li>
                                            <li>
                                               <a href="admin/db-package-expired.html">Package Expired</a>
                                            </li>
                                         </ul>
                                      </li>
                                      <li>
                                         <a href="admin/db-comment.html">Comments</a>
                                      </li>
                                      <li>
                                         <a href="admin/db-wishlist.html">Wishlist</a>
                                      </li>
                                      <li>
                                         <a href="admin/login.html">Login</a>
                                      </li>
                                      <li>
                                         <a href="admin/forgot.html">Forget Password</a>
                                      </li> */}
                                   </ul>
                                </li>
                             </ul>
                          </nav>
                       </div>
                       {
                          currentUser.role == null ? (
                             <div className="header-btn">
                                <a href="/login" className="button-primary login">Login</a>
                             </div>
                          ) : (
                             <Stack direction={"row"} spacing={2}>
                                 <div style={{ display: "flex", alignItems: "center" }}>
                                    <Link to={currentUser.role == 1 ? "/admin-dashboard" : "/dashboard"}>
                                       <Button variant='contained' size='small' sx={{
                                          fontWeight: "600",
                                          borderRadius: "8px",
                                          backgroundColor: "#2E6A67",
                                          '&:hover': {
                                             backgroundColor: "#488b88"
                                          }
                                       }}>
                                          Dashboard
                                       </Button>
                                    </Link>
                                 </div>
                                 <div>
                                    <IconButton size="small" onClick={() => {
                                    if(currentUser.role == 2 || currentUser.role == 3){
                                       return direct("/dashboard")
                                    }else if(currentUser.role == 1){
                                       return direct("/admin-dashboard")
                                    }
                                 }}>
                                    <Avatar alt={currentUser.user} src={currentUser.image !== null ? currentUser.image : car} sx={{ width: 50, height: 50 }} />
                                 </IconButton>
                                 </div>
                             </Stack>
                          )
                       }
                    </div>
                 </div>
                 <div className="mobile-menu-container"></div>
              </header>
     
              {/* MAIN START */}
              <main id="content" className="site-main">
                 {props}
              </main>
              {/* MAIN END */}
     
              <footer id="colophon" className="site-footer footer-primary">
            <div className="top-footer">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-4 col-md-6">
                        <aside className="widget widget_text">
                           <h3 className="widget-title">
                              Tentang Travel
                           </h3>
                           <div className="textwidget widget-text">
                              Kami bermitra dengan PT. Fadar Dian Karomah yang terpercaya dan memiliki izin bertaraf nasional seperti :
                           </div>
                           <div>
                              <ul>
                                 <li>IATA {"International Air Transport Association"}</li>
                                 <li>KAN {"Komite Akreditasi Nasional"}</li>
                                 <li>PPIU {"Penyelenggara Perjalanan Ibadah Umroh"}</li>
                              </ul>
                           </div>
                        </aside>
                     </div>
                     <div className="col-lg-4 col-md-6">
                        <aside className="widget widget_text">
                           <h3 className="widget-title">KONTAK KAMI</h3>
                           <div className="textwidget widget-text">
                              Anda dapat menghubungi kami di kontak dibawah ini
                              <ul>
                                 <li>
                                    <a href="https://wa.me/+622169551258" target={"_blank"}>
                                       <i className="fas fa-phone-alt"></i>
                                       +622169551258
                                    </a>
                                 </li>
                                 {/* <li>
                                    <a href="#">
                                       <i className="fas fa-envelope"></i>
                                       company@domain.com
                                    </a>
                                 </li>
                                 <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                    3146  Koontz, California
                                 </li> */}
                              </ul>
                           </div>
                        </aside>
                     </div>
                     <div className="col-lg-4 col-md-6">
                        <aside className="widget widget_text">
                           <h3 className="widget-title">ALAMAT KAMI</h3>
                           <div className="textwidget widget-text">
                              Anda dapat mendatangi kantor kami di:
                              <ul>
                                 <li>
                                    Jorong Surau Pinang, Ampang Gadang, Ampek Angkek, Kabupaten Agam 26190, Sumatera Barat
                                 </li>
                              </ul>
                           </div>
                        </aside>
                     </div>
                  </div>
               </div>
            </div>
            <div className="buttom-footer">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-md-4">
                        <div className="footer-menu">
                           <ul>
                              <li>
                                 <a href="#">Privacy Policy</a>
                              </li>
                              <li>
                                 <a href="#">Term & Condition</a>
                              </li>
                              <li>
                                 <a href="#">FAQ</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-md-4 text-center">
                        <div className="footer-logo">
                           <a href="#"><img src={logo} alt="" className='logo-footer'/></a>
                        </div>
                     </div>
                     <div className="col-md-4" style={{
                        display: 'flex',
                        justifyContent: 'right'
                     }}>
                        <div className="copy-right text-right">Copyright ?? 2022 PT HARAMAIN BAROKAH SINERGI. All rights reserved</div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
              <a id="backTotop" href="#" className="to-top-icon">
                 <i className="fas fa-chevron-up"></i>
              </a>
              {/* <!-- custom search field html --> */}
                 <div className="header-search-form">
                    <div className="container">
                       <div className="header-search-container">
                          <form className="search-form" role="search" method="get" >
                             <input type="text" name="s" placeholder="Enter your text..."/>
                          </form>
                          <a href="#" className="search-close">
                             <i className="fas fa-times"></i>
                          </a>
                       </div>
                    </div>
                 </div>
              {/* <!-- header html end --> */}
           </div>
         </div>
       )
   }
