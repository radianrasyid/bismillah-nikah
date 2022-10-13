import React from 'react'
import img1 from "./assets/images/img1.jpg";
import img5 from "./assets/images/img5.jpg";
import img9 from "./assets/images/img9.jpg";
import hajiplus from "./assetsUser/images/hajiplus.jpg"
import mecca from "./assetsUser/images/mecca.jpg"
import mecca2 from "./assetsUser/images/mecca2.jpg"
import mosque from "./assetsUser/images/mosque.jpg";
import sliderBanner1 from "./assetsUser/images/banner1.jpg";
import sliderBanner2 from "./assetsUser/images/banner2.jpg";
import { Carousel } from 'react-bootstrap';


export default function Homepage() {

   const fetchData = async() => {
      await fetch("http://localhost:8000", {
         method: 'GET'
      })
   }

   React.useEffect(() => {
      fetchData()
   }, [])

  return (
    <>
      {/* <!-- Home slider html start --> */}
<section className="home-slider-section">
<div className="home-slider">
   <Carousel>
      <Carousel.Item>
         <div className="home-banner-items">
            <div className="banner-inner-wrap" style={{ backgroundImage: `url(${sliderBanner1})` }}></div>
               <div className="banner-content-wrap">
                  <div className="container">
                     <div className="banner-content text-center">
                        <h2 className="banner-title">TRAVELLING AROUND THE WORLD</h2>
                        <p>Taciti quasi, sagittis excepteur hymenaeos, id temporibus hic proident ullam, eaque donec delectus tempor consectetur nunc, purus congue? Rem volutpat sodales! Mollit. Minus exercitationem wisi.</p>
                        <a href="#" className="button-primary">CONTINUE READING</a>
                     </div>
                  </div>
               </div>
            <div className="overlay"></div>
         </div>
      </Carousel.Item>
      <Carousel.Item>
         <div className="home-banner-items">
            <div className="banner-inner-wrap" style={{ backgroundImage: `url(${sliderBanner2})` }}></div>
               <div className="banner-content-wrap">
                  <div className="container">
                     <div className="banner-content text-center">
                        <h2 className="banner-title">EXPERIENCE THE NATURE'S BEAUTY</h2>
                        <p>Taciti quasi, sagittis excepteur hymenaeos, id temporibus hic proident ullam, eaque donec delectus tempor consectetur nunc, purus congue? Rem volutpat sodales! Mollit. Minus exercitationem wisi.</p>
                        <a href="#" className="button-primary">CONTINUE READING</a>
                     </div>
                  </div>
               </div>
            <div className="overlay"></div>
         </div>
      </Carousel.Item>
   </Carousel>
</div>
</section>
{/* <!-- slider html start -->
<!-- Home search field html start --> */}
<div className="trip-search-section shape-search-section br-8">
<div className="slider-shape"></div>
<div className="container">
   <div className="trip-search-inner white-bg d-flex br-8">
      <div className='text-center' style={{ display: "flex", justifyContent: "center" }}>
         <p className='home-page-quotes'>Dari sahabat Abu Hurairah ra, dari Nabi Muhammad saw, ia bersabda, "Umrah ke umrah merupakan kafarah (dosa) di antara keduanya. Sedangkan haji mabrur tiada balasan baginya kecuali surga"
            <br></br>
            (HR Malik, Bukhari, Muslim, At-Tirmidzi, An-Nasai, Ibnu Majah, Al-Asbihani)
         </p>
      </div>
   </div>
</div>
</div>
{/* <!-- search search field html end --> */}
{/* <!-- Home packages section html start --> */}
<section className="package-section">
<div className="container">
   <div className="section-heading text-center">
      <div className="row">
         <div className="col-lg-8 offset-lg-2">
            <h5 className="dash-style">BERIBADAH DENGAN MUDAH</h5>
            <h2>PAKET UMROH</h2>
            <p>Kami menawarkan beragam paket umroh dengan kesempatan besar untuk mendapatkan hadiah menarik</p>
         </div>
      </div>
   </div>
   <div className="package-inner">
      <div className="row">
         <div data-aos="fade-right" className="col-lg-4 col-md-6">
            <div className="package-wrap">
               <figure className="feature-image">
                  <a href="#">
                     <img src={mecca} alt="" className='br-8'/>
                  </a>
               </figure>
               <div className="package-price">
                  <h6>
                     <span>Rp 34.600.000 </span>
                  </h6>
               </div>
               <div className="package-content-wrap">
                  <div className="package-meta text-center">
                     <ul>
                        <li>
                           <i className="far fa-clock"></i>
                           7D/6N
                        </li>
                        <li>
                           <i className="fas fa-user-friends"></i>
                           People: 5
                        </li>
                        <li>
                           <i className="fas fa-map-marker-alt"></i>
                           Saudi Arabia
                        </li>
                     </ul>
                  </div>
                  <div className="package-content">
                     <h3>
                        <a href="#">Program Reguler 6 bulan</a>
                     </h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus.</p>
                     <div className="btn-wrap">
                        <a href="/login" className="button-text width-6">Book Now<i className="fas fa-arrow-right"></i></a>
                        <a href="#" className="button-text width-6">Wish List<i className="far fa-heart"></i></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div data-aos="fade-right" className="col-lg-4 col-md-6">
            <div className="package-wrap">
               <figure className="feature-image">
                  <a href="#">
                     <img src={mosque} alt="" className='br-8'/>
                  </a>
               </figure>
               <div className="package-price">
                  <h6>
                     <span>Rp 39.000.000 </span>
                  </h6>
               </div>
               <div className="package-content-wrap">
                  <div className="package-meta text-center">
                     <ul>
                        <li>
                           <i className="far fa-clock"></i>
                           5D/4N
                        </li>
                        <li>
                           <i className="fas fa-user-friends"></i>
                           People: 8
                        </li>
                        <li>
                           <i className="fas fa-map-marker-alt"></i>
                           Saudi Arabia
                        </li>
                     </ul>
                  </div>
                  <div className="package-content">
                     <h3>
                        <a href="#">Program Umroh Plus Turki</a>
                     </h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus.</p>
                     <div className="btn-wrap">
                        <a href="#" className="button-text width-6">Book Now<i className="fas fa-arrow-right"></i></a>
                        <a href="#" className="button-text width-6">Wish List<i className="far fa-heart"></i></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div data-aos="fade-right" className="col-lg-4 col-md-6">
            <div className="package-wrap">
               <figure className="feature-image">
                  <a href="#">
                     <img src={mecca2} alt="" className='br-8'/>
                  </a>
               </figure>
               <div className="package-price">
                  <h6>
                     <span>Rp 34.600.000 </span>
                  </h6>
               </div>
               <div className="package-content-wrap">
                  <div className="package-meta text-center">
                     <ul>
                        <li>
                           <i className="far fa-clock"></i>
                           6D/5N
                        </li>
                        <li>
                           <i className="fas fa-user-friends"></i>
                           People: 6
                        </li>
                        <li>
                           <i className="fas fa-map-marker-alt"></i>
                           Saudi Arabia
                        </li>
                     </ul>
                  </div>
                  <div className="package-content">
                     <h3>
                        <a href="#">Umroh Kolektif 45 Jama'ah</a>
                     </h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus.</p>
                     <div className="btn-wrap">
                        <a href="#" className="button-text width-6">Book Now<i className="fas fa-arrow-right"></i></a>
                        <a href="#" className="button-text width-6">Wish List<i className="far fa-heart"></i></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="btn-wrap text-center">
         <a href="#" className="button-primary">VIEW ALL PACKAGES</a>
      </div>
   </div>
</div>
</section>
{/* <!-- packages html end -->
<!-- Home callback section html start --> */}
{/* <!-- callback html end -->
<!-- Home activity section html start --> */}
{/* <!-- activity html end -->
<!-- Home special section html start --> */}
<section className="special-section">
<div className="container">
   <div className="section-heading text-center">
      <div className="row">
         <div className="col-lg-8 offset-lg-2">
            <h5 className="dash-style">ANDA TIDAK INGIN MENUNGGU?</h5>
            <h2>PROGRAM PREMIUM</h2>
            <p>Nikmati kesempatan melaksanakan ibadah haji tanpa menunggu lama dengan bergabung dalam program</p>
         </div>
      </div>
   </div>
   <div className="special-inner">
      <div className="row">
         <div className="col-md-6 col-lg-4">
            {/* <div className="special-item">
               <figure className="special-img">
                  <img src={img9} className="img-rounded" alt=""/>
               </figure>
               <div className="special-content">
                  <div className="meta-cat">
                     <a href="#">CANADA</a>
                  </div>
                  <h3>
                     <a href="#">Experience the natural beauty of glacier</a>
                  </h3>
                  <div className="package-price">
                     Price:
                     <del>$1500</del>
                     <ins>$1200</ins>
                  </div>
               </div>
            </div> */}
         </div>
         <div data-aos="fade-up" className="col-md-6 col-lg-4">
            <div className="special-item">
               <figure className="special-img">
                  <img src={hajiplus} className="img-rounded special-image" alt=""/>
               </figure>
               <div className="special-content">
                  <div className="meta-cat">
                     <a href="#">SAUDI ARABIA</a>
                  </div>
                  <h3>
                     <a href="#">HAJI PLUS 2024</a>
                  </h3>
                  <div className="package-price">
                     Harga:
                     <ins>Rp 250.000.000</ins>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-md-6 col-lg-4">
            {/* <div className="special-item">
               <figure className="special-img">
                  <img src={img9} className="img-rounded" alt=""/>
               </figure>
               <div className="special-content">
                  <div className="meta-cat">
                     <a href="#">MALAYSIA</a>
                  </div>
                  <h3>
                     <a href="#">Sunset view of beautiful lakeside city</a>
                  </h3>
                  <div className="package-price">
                     Price:
                     <del>$1800</del>
                     <ins>$1476</ins>
                  </div>
               </div>
            </div> */}
         </div>
      </div>
   </div>
</div>
</section>
{/* <!-- special html end -->
<!-- Home special section html start --> */}
<section className="best-section">
<div className="container">
   <div className="row">
      <div className="col-lg-5">
         <div className="section-heading">
            <h5 className="dash-style">OUR TOUR GALLERY</h5>
            <h2>BEST TRAVELER'S SHARED PHOTOS</h2>
            <p>Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Esse? Aut nostrum, ornare quas provident laoreet nesciunt odio voluptates etiam, omnis.</p>
         </div>
         <figure className="gallery-img">
            <img src="assets/images/img12.jpg" alt=""/>
         </figure>
      </div>
      <div className="col-lg-7">
         <div className="row">
            <div className="col-sm-6">
               <figure className="gallery-img">
                  <img src="assets/images/img13.jpg" alt=""/>
               </figure>
            </div>
            <div className="col-sm-6">
               <figure className="gallery-img">
                  <img src="assets/images/img14.jpg" alt=""/>
               </figure>
            </div>
         </div>
         <div className="row">
            <div className="col-12">
               <figure className="gallery-img">
                  <img src="assets/images/img15.jpg" alt=""/>
               </figure>
            </div>
         </div>
      </div>
   </div>
</div>
</section>
{/* <!-- best html end -->
<!-- Home client section html start --> */}
{/* <!-- client html end -->
<!-- Home blog section html start --> */}
{/* <!-- blog html end -->
<!-- Home testimonial section html start --> */}
<div className="testimonial-section" style={{ backgroundImage: "url(assets/images/img23.jpg)" }}>
<div className="container">
   <div className="row">
      <div className="col-lg-10 offset-lg-1">
         <div className="testimonial-inner testimonial-slider">
            <Carousel>
               <Carousel.Item>
                  <div className="testimonial-item text-center">
                     <figure className="testimonial-img">
                        <img src="assets/images/img20.jpg" alt=""/>
                     </figure>
                     <div className="testimonial-content">
                        <p>" Dolorum aenean dolorem minima! Voluptatum? Corporis condimentum ac primis fusce, atque! Vivamus. Non cupiditate natus excepturi, quod quo, aute facere? Deserunt aliquip, egestas ipsum, eu.Dolorum aenean dolorem minima!? Corporis condi mentum acpri! "</p>
                        <cite>
                           Johny English
                           <span className="company">Travel Agent</span>
                        </cite>
                     </div>
                  </div>
               </Carousel.Item>
               <Carousel.Item>
                  <div className="testimonial-item text-center">
                     <figure className="testimonial-img">
                        <img src="assets/images/img21.jpg" alt=""/>
                     </figure>
                     <div className="testimonial-content">
                        <p>" Dolorum aenean dolorem minima! Voluptatum? Corporis condimentum ac primis fusce, atque! Vivamus. Non cupiditate natus excepturi, quod quo, aute facere? Deserunt aliquip, egestas ipsum, eu.Dolorum aenean dolorem minima!? Corporis condi mentum acpri! "</p>
                        <cite>
                           William Housten
                           <span className="company">Travel Agent</span>
                        </cite>
                     </div>
                  </div>
               </Carousel.Item>
               <Carousel.Item>
                  <div className="testimonial-item text-center">
                     <figure className="testimonial-img">
                        <img src="assets/images/img22.jpg" alt=""/>
                     </figure>
                     <div className="testimonial-content">
                        <p>" Dolorum aenean dolorem minima! Voluptatum? Corporis condimentum ac primis fusce, atque! Vivamus. Non cupiditate natus excepturi, quod quo, aute facere? Deserunt aliquip, egestas ipsum, eu.Dolorum aenean dolorem minima!? Corporis condi mentum acpri! "</p>
                        <cite>
                           Alison Wright
                           <span className="company">Travel Guide</span>
                        </cite>
                     </div>
                  </div>
               </Carousel.Item>
            </Carousel>
         </div>
      </div>
   </div>
</div>
</div>
{/* <!-- testimonial html end -->
<!-- Home contact details section html start --> */}
{/* <!--  contact details html end --> */}
    </>
  )
}
