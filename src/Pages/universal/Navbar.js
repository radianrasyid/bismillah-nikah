import React from 'react'
import { Helmet } from 'react-helmet';
import travelogo from "../assets/images/travele-logo.png"
import travelogo1 from "../assets/images/travele-logo1.png"
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
                           <img className="white-logo" src={travelogo} alt="logo"/>
                           <img className="black-logo" src={travelogo1} alt="logo"/>
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
                     <a href="/login" className="button-primary">BOOK NOW</a>
                  </div>
               </div>
            </div>
            <div className="mobile-menu-container"></div>
         </header>
         <main id="content" className="site-main">
            {props}
         </main>
         <footer id="colophon" className="site-footer footer-primary">
            <div className="top-footer">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-3 col-md-6">
                        <aside className="widget widget_text">
                           <h3 className="widget-title">
                              About Travel
                           </h3>
                           <div className="textwidget widget-text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                           </div>
                           <div className="award-img">
                              <a href="#"><img src="assets/images/logo6.png" alt=""/></a>
                              <a href="#"><img src="assets/images/logo2.png" alt=""/></a>
                           </div>
                        </aside>
                     </div>
                     <div className="col-lg-3 col-md-6">
                        <aside className="widget widget_text">
                           <h3 className="widget-title">CONTACT INFORMATION</h3>
                           <div className="textwidget widget-text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              <ul>
                                 <li>
                                    <a href="#">
                                       <i className="fas fa-phone-alt"></i>
                                       +01 (977) 2599 12
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#">
                                       <i className="fas fa-envelope"></i>
                                       company@domain.com
                                    </a>
                                 </li>
                                 <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                    3146  Koontz, California
                                 </li>
                              </ul>
                           </div>
                        </aside>
                     </div>
                     <div className="col-lg-3 col-md-6">
                        <aside className="widget widget_recent_post">
                           <h3 className="widget-title">Latest Post</h3>
                           <ul>
                              <li>
                                 <h5>
                                    <a href="#">Life is a beautiful journey not a destination</a>
                                 </h5>
                                 <div className="entry-meta">
                                    <span className="post-on">
                                       <a href="#">August 17, 2021</a>
                                    </span>
                                    <span className="comments-link">
                                       <a href="#">No Comments</a>
                                    </span>
                                 </div>
                              </li>
                              <li>
                                 <h5>
                                    <a href="#">Take only memories, leave only footprints</a>
                                 </h5>
                                 <div className="entry-meta">
                                    <span className="post-on">
                                       <a href="#">August 17, 2021</a>
                                    </span>
                                    <span className="comments-link">
                                       <a href="#">No Comments</a>
                                    </span>
                                 </div>
                              </li>
                           </ul>
                        </aside>
                     </div>
                     <div className="col-lg-3 col-md-6">
                        <aside className="widget widget_newslatter">
                           <h3 className="widget-title">SUBSCRIBE US</h3>
                           <div className="widget-text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           </div>
                           <form className="newslatter-form">
                              <input type="email" name="s" placeholder="Your Email.."/>
                              <input type="submit" name="s" value="SUBSCRIBE NOW"/>
                           </form>
                        </aside>
                     </div>
                  </div>
               </div>
            </div>
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
                           <a href="#"><img src={travelogo} alt=""/></a>
                        </div>
                     </div>
                     <div className="col-md-5">
                        <div className="copy-right text-right">Copyright © 2021 Travele. All rights reserveds</div>
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
