import React from 'react'
import { Helmet } from 'react-helmet';
import travelogo from "../assets/images/travele-logo.png"
import travelogo1 from "../assets/images/travele-logo1.png"
import logo from "../assets/images/logo-hrbs.jpg"
import img1 from "../assets/images/img1.jpg"
import img5 from "../assets/images/img5.jpg"
import "../../style.css";

export default function Navbar({props}) {
   React.useEffect(() => {
      <Helmet>
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
      </Helmet>
   })
  return (
    <div>
      <div id="page" className="full-page">
         <header id="masthead" className="site-header header-primary">
            {/* <!-- header html start --> */}
            <div className="bottom-header">
               <div className="container d-flex justify-content-between align-items-center">
                  <div className="site-identity">
                     <h1 className="site-title">
                        <a href="index.html">
                           <img className="white-logo" src={logo} alt="logo"/>
                           <img className="black-logo" src={logo} alt="logo"/>
                        </a>
                     </h1>
                  </div>
                  <div className="main-navigation d-none d-lg-block">
                     <nav id="navigation" className="navigation">
                        <ul>
                           <li className="menu-item-has-children">
                              <a href="index.html">Home</a>
                           </li>
                           <li className="menu-item-has-children">
                              <a href="#">Tour</a>
                              <ul>
                                 <li>
                                    <a href="destination.html">Destination</a>
                                 </li>
                                 <li>
                                    <a href="tour-packages.html">Tour Packages</a>
                                 </li>
                                 <li>
                                    <a href="package-offer.html">Package Offer</a>
                                 </li>
                                 <li>
                                    <a href="package-detail.html">Package Detail</a>
                                 </li>
                                 <li>
                                    <a href="tour-cart.html">Tour Cart</a>
                                 </li>
                                 <li>
                                    <a href="booking.html">Package Booking</a>
                                 </li>
                                 <li>
                                    <a href="confirmation.html">Confirmation</a>
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
                              <a href="#">User</a>
                              <ul>
                                 <li>
                                    <a href="admin/dashboard.html">Dashboard</a>
                                 </li>
                                 <li className="menu-item-has-children">
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
                                 </li>
                                 <li>
                                    <a href="admin/db-booking.html">Booking</a>
                                 </li>
                                 <li className="menu-item-has-children">
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
                                 </li>
                              </ul>
                           </li>
                        </ul>
                     </nav>
                  </div>
                  <div className="header-btn">
                     <a href="/login" className="button-primary">Pesan Sekarang</a>
                  </div>
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
            <div className="buttom-footer">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-md-5">
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
                     <div className="col-md-2 text-center">
                        <div className="footer-logo">
                           <a href="#"><img src={logo} style={{ width: "5rem", height: "5rem", borderRadius: "50%" }} alt=""/></a>
                        </div>
                     </div>
                     <div className="col-md-5" style={{ display: "flex", justifyContent: "right" }}>
                        <div className="copy-right ms-auto">Copyright © 2021 Travele. All rights reserveds</div>
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
