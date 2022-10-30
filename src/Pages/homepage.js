import React, { useState } from 'react'
import img1 from "./assets/images/img1.jpg";
import img5 from "./assets/images/img5.jpg";
import img9 from "./assets/images/img9.jpg";
import mecca3 from "./assetsUser/images/mecca1.jpg"
import mecca4 from "./assetsUser/images/mecca3.jpg"
import kaabah from "./assetsUser/images/kaabah.jpg"
import payung from "./assetsUser/images/payung.jpg"
import hajiplus from "./assetsUser/images/hajiplus.jpg"
import mecca from "./assetsUser/images/mecca.jpg"
import mecca2 from "./assetsUser/images/mecca2.jpg"
import mosque from "./assetsUser/images/mosque.jpg";
import sliderBanner1 from "./assetsUser/images/banner1.jpg";
import sliderBanner2 from "./assetsUser/images/banner2.jpg";
import { Carousel } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import { ImageList, ImageListItem } from '@mui/material';


export default function Homepage() {

   const [image, setImage] = useState([mecca3, mecca4, kaabah, payung])
   const [programs, setPrograms] = useState([])
   const [loading, setLoading] = React.useState(null);

   const fetchData = async() => {
      setLoading(true)
      await fetch("https://umrohwebsite.herokuapp.com/api/v1/program")
      .then(async(res) => {
         let hasil = await res.json();
         setPrograms(hasil.data)
      })
      setLoading(false)
   }

   const formatRupiah = (money) => {
      return new Intl.NumberFormat('id-ID',
        { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
      ).format(money);
   }

   React.useEffect(() => {
      fetchData()
   }, [])

  if(loading === false){
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
                          <h2 className="banner-title">HRB SINERGI</h2>
                          <p>Memberikan kemudahan bagi anda untuk melakukan ibadah haji dan umroh dengan aman, nyaman, dan terjamin</p>
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
                          <h2 className="banner-title">HRB SINERGI</h2>
                          <p>Agen haji dan umroh terpercaya</p>
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
  <section className="destination-section">
     <div className="container">
        <div className="section-heading">
           <div className="row align-items-end">
              <div className="col-lg-7">
                 <h5 className="dash-style">INGIN TAU LEBIH DALAM TENTANG KAMI?</h5>
                 <h2>AGEN UMROH DAN HAJI TERPERCAYA</h2>
              </div>
              <div className="col-lg-5">
                 <div className="section-disc">
                    <ul className='list-custom'>
                       <li>
                          <p>Jaringan yang luas</p>
                       </li>
                       <li>
                          <p>Proses menunggu yang lebih cepat</p>
                       </li>
                       <li>
                          <p>Fasilitas terbaik</p>
                       </li>
                       <li>
                          <p>Fasilitas terbaik</p>
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
        <div className="destination-inner destination-three-column">
           
           {/* <div className="btn-wrap text-center">
              <a href="#" className="button-primary">MORE DESTINATION</a>
           </div> */}
        </div>
     </div>
  </section>
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
           {
              programs.map((item, index) => {
                 if(item.programType == 0 || item.programType == 1){
                    const link = `http://localhost:3000/tourpackages/${item.id}`
                    return(
                       <div data-aos="fade-right" className="col-lg-4 col-md-6">
                          <div className="package-wrap">
                             <figure className="feature-image">
                                <a href={link}>
                                   <img src={item.image} alt="" className='br-8' style={{ height: "20rem", width: "30rem", objectFit: "cover" }}/>
                                </a>
                             </figure>
                             <div className="package-price">
                                <h6>
                                   <span>{formatRupiah(item.price)}</span>
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
                                         People: {item.users.length}
                                      </li>
                                      <li>
                                         <i className="fas fa-map-marker-alt"></i>
                                         Saudi Arabia
                                      </li>
                                   </ul>
                                </div>
                                <div className="package-content">
                                   <h3>
                                      <a href="#">{item.programName}</a>
                                   </h3>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus.</p>
                                   <div className="btn-wrap">
                                      <a href="/login" className="button-text width-6">Pesan Sekarang<i className="fas fa-arrow-right"></i></a>
                                      <a href="#" className="button-text width-6">Wish List<i className="far fa-heart"></i></a>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    )
                 }
              })
           }
           {/* <div data-aos="fade-right" className="col-lg-4 col-md-6">
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
                          <a href="#" className="button-text width-6">Pesan Sekarang<i className="fas fa-arrow-right"></i></a>
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
                          <a href="#" className="button-text width-6">Pesan Sekarang<i className="fas fa-arrow-right"></i></a>
                          <a href="#" className="button-text width-6">Wish List<i className="far fa-heart"></i></a>
                       </div>
                    </div>
                 </div>
              </div>
           </div> */}
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
              <h5 className="dash-style">ALBUM</h5>
              <h2>MOMEN YANG DIABADIKAN</h2>
              {/* <p>Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Esse? Aut nostrum, ornare quas provident laoreet nesciunt odio voluptates etiam, omnis.</p> */}
           </div>
           <div>
              <ImageList variant='masonry' cols={3} gap={8}>
                 {
                    image.map((item, index) => {
                       return(
                          <ImageListItem key={index} data-aos="fade-right">
                             <img
                             src={`${item}?w=248&fit=crop&auto=format`}
                             srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                             // alt={item.title}
                             loading="lazy"
                             />
                          </ImageListItem>
                       )
                    })
                 }
              </ImageList>
           </div>
           {/* <figure className="gallery-img">
              <img src={mecca3} alt=""/>
           </figure> */}
        </div>
        <div className="col-lg-7">
           <div>
              <ImageList variant='masonry' cols={3} gap={8}>
                 {
                    image.map((item, index) => {
                       return(
                          <ImageListItem key={index} data-aos="fade-left">
                             <img
                             src={`${item}?w=248&fit=crop&auto=format`}
                             srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                             // alt={item.title}
                             loading="lazy"
                             />
                          </ImageListItem>
                       )
                    })
                 }
              </ImageList>
           </div>
        </div>
        {/* <div className="col-lg-7">
           <div className="row">
              <div className="col-sm-6">
                 <figure className="gallery-img">
                    <img src={mecca4} alt=""/>
                 </figure>
              </div>
              <div className="col-sm-6">
                 <figure className="gallery-img">
                    <img src={kaabah} alt=""/>
                 </figure>
              </div>
           </div>
           <div className="row">
              <div className="col-12">
                 <figure className="gallery-img">
                    <img src={payung} alt=""/>
                 </figure>
              </div>
           </div>
        </div> */}
     </div>
  </div>
  </section>
  {/* <!-- best html end -->
  <!-- Home client section html start --> */}
  {/* <!-- client html end -->
  <!-- Home blog section html start --> */}
  {/* <!-- blog html end -->
  <!-- Home testimonial section html start --> */}
  {/* <div className="testimonial-section" style={{ backgroundImage: "url(assets/images/img23.jpg)" }}>
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
  </div> */}
  {/* <!-- testimonial html end -->
  <!-- Home contact details section html start --> */}
  {/* <!--  contact details html end --> */}
      </>
    )
  }else if(loading === true){
   return(
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
         <ReactLoading type='bars' color='#2E6A67' width={"10%"} height={"10%"} />
      </div>
   )
  }
}
