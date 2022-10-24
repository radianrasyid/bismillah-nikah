import React from 'react'
import { Tab, Box, styled } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import hajivektor from "../assetsUser/images/hajivektor.png"
import { useParams } from 'react-router-dom';
import { Row, Col, Form, Card } from "react-bootstrap"
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";
import { useSelector } from 'react-redux';
import formatRupiah from '../functions/formatRupiah';

const TabStyled = styled(Tab)(({theme}) => ({
  backgroundColor: "#417D7A",
  borderRadius: "8px",
  margin: "0 0.5rem",
  fontFamily: "Montserrat",
  textTransform: "none",
  fontWeight: "600",
  color: "#FFFFFF",
  '&:active':{
    color: "#FFFFFF",
    backgroundColor: "#427D7A"
  }
}))

const TabPanelStyled = styled(TabPanel)(({theme}) => ({
  backgroundColor: "rgba(226, 235, 234, 1)",
  borderRadius: "8px",
  padding: "1rem 2rem",
  fontWeight: "500"
}))

export default function TourPackageDetail() {

   const { id } = useParams();
   const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: "IDR"
   })

  const [value, setValue] = React.useState("1");
  const [data, setData] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const currentUser = useSelector((state) => state.auth);

  const fetchData = async(e) => {
      let response = await fetch(`http://localhost:8000/api/v1/program/${id}`)
      let hasil = await response.json();

      setData(hasil.data);
  }

  const onChoose = async(e) => {
   e.preventDefault();

   await fetch("http://localhost:8000/api/v3/user/program", {
      method: "PATCH",
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${currentUser.token}`
      },
      body: JSON.stringify({
         program_id: id,
         program_type: data.programType
      })
   })
   .then(async(res) => {
      let response = await res.json();

      if(response.message==="successfully choosed a program"){
         return window.alert(`Berhasil memilih program`)
      }else if(response.message !=="successfully choosed a program"){
         return window.alert("Terjadi kesalahan dalam memilih program")
      }
   })

   setOpen(false);
  }

  React.useEffect(() => {
   fetchData()
  }, [])

  if(data !== null){
   return (
      <div id="page" className="full-page">
           <main id="content" className="site-main">
              {/* <!-- Inner Banner html start--> */}
              <section className="inner-banner-wrap inner-banner-gray">
                 <div className="inner-baner-container" style={{ backgroundImage: 'url(../assets/images/inner-banner.jpg)' }}>
                    <div className="container">
                       <div className="inner-banner-content">
                          <h1 className="inner-title">Product details</h1>
                       </div>
                    </div>
                 </div>
                 <div className="inner-shape"></div>
              </section>
              {/* <!-- Inner Banner html end--> */}
              {/* <!-- product section html start --> */}
                 <div className="product-outer-wrap product-wrap">
                    <div className="product-inner-wrap">
                       <div className="container">
                          <div className="row align-items-center">
                             <div className="col-sm-6">
                                <div className="product-thumbnails">
                                   <div className="single-product-item">
                                      <figure className="feature-image">
                                         <img src={data.image} alt=""/>
                                      </figure>
                                   </div>
                                   {/* <div className="single-product-item">
                                      <figure className="feature-image">
                                         <img src="assets/images/product2.jpg" alt=""/>
                                      </figure>
                                      <div className="image-search-icon">
                                         <a href="assets/images/product2.jpg" data-lightbox="lightbox-set">
                                            <i className="fas fa-search"></i>
                                         </a>
                                      </div>
                                   </div>
                                   <div className="single-product-item">
                                      <figure className="feature-image">
                                         <img src="assets/images/product3.jpg" alt=""/>
                                      </figure>
                                      <div className="image-search-icon">
                                         <a href="assets/images/product3.jpg" data-lightbox="lightbox-set">
                                            <i className="fas fa-search"></i>
                                         </a>
                                      </div>
                                   </div>
                                   <div className="single-product-item">
                                      <figure className="feature-image">
                                         <img src="assets/images/product4.jpg" alt=""/>
                                      </figure>
                                      <div className="image-search-icon">
                                         <a href="assets/images/product4.jpg" data-lightbox="lightbox-set">
                                            <i className="fas fa-search"></i>
                                         </a>
                                      </div>
                                   </div>
                                   <div className="single-product-item">
                                      <figure className="feature-image">
                                         <img src="assets/images/product5.jpg" alt=""/>
                                      </figure>
                                      <div className="image-search-icon">
                                         <a href="assets/images/product5.jpg" data-lightbox="lightbox-set">
                                            <i className="fas fa-search"></i>
                                         </a>
                                      </div>
                                   </div> */}
                                </div>
                                {/* <div className="product-thumb-nav">
                                   <div className="single-product-item">
                                      <figure className="feature-image">
                                         <img src="assets/images/product1.jpg" alt=""/>
                                      </figure>
                                   </div>
                                   <div className="single-product-item">
                                      <figure className="feature-image">
                                         <img src="assets/images/product2.jpg" alt=""/>
                                      </figure>
                                   </div>
                                   <div className="single-product-item">
                                      <figure className="feature-image">
                                         <img src="assets/images/product3.jpg" alt=""/>
                                      </figure>
                                   </div>
                                   <div className="single-product-item">
                                      <figure className="feature-image">
                                         <img src="assets/images/product4.jpg" alt=""/>
                                      </figure>
                                   </div>
                                   <div className="single-product-item">
                                      <figure className="feature-image">
                                         <img src="assets/images/product5.jpg" alt=""/>
                                      </figure>
                                   </div>
                                </div> */}
                             </div>
                             <div className="col-sm-6">
                                <div className="product-summary">
                                   <h2>{data.programName}</h2>
                                   <div className="product-price">
                                      <ins>{formatter.format(data.price)}</ins>
                                   </div>
                                   <form className="cart-item">
                                      <button className="button-primary" onClick={handleClickOpen} type="button">Ikuti</button>
                                      <Dialog
                                       open={open}
                                       onClose={handleClose}
                                       aria-labelledby="alert-dialog-title"
                                       aria-describedby="alert-dialog-description"
                                       >
                                       <DialogTitle id="alert-dialog-title" className="dialog-title">
                                          {"Apakah anda yakin ingin mengikuti program ini?"}
                                       </DialogTitle>
                                       <DialogContent>
                                          <DialogContentText id="alert-dialog-description">
                                             <Row>
                                                <Col lg={3}>
                                                   <p className='dialog-heading-2'>Program</p>
                                                </Col>
                                                <Col>
                                                   <p style={{ fontWeight: "600" }}>: {data.programName}</p>
                                                </Col>
                                             </Row>
                                             <Row>
                                                <Col lg={3}>
                                                   <p className='dialog-heading-2'>Price</p>
                                                </Col>
                                                <Col>
                                                   <p style={{ fontWeight: "600" }}>: {formatRupiah(data.price)}</p>
                                                </Col>
                                             </Row>
                                          </DialogContentText>
                                       </DialogContent>
                                       <DialogActions>
                                          <Button onClick={handleClose} sx={{
                                             backgroundColor: "#d3504a",
                                             textTransform: "none",
                                             color: "#FFFFFF",
                                             fontWeight: "600",
                                             '&:hover': {
                                                backgroundColor: "#a63636"
                                             }
                                          }}>Batal</Button>
                                          <Button onClick={onChoose} autoFocus sx={{
                                             backgroundColor: "#1A3C40",
                                             textTransform: "none",
                                             color: "#FFFFFF",
                                             fontWeight: "600",
                                             '&:hover': {
                                                backgroundColor: "#37565a"
                                             }
                                          }}>
                                             Setuju
                                          </Button>
                                       </DialogActions>
                                       </Dialog>
                                   </form>
                                   <div className="product-meta">
                                      <div className="cat-detail">
                                         <strong>Categories:</strong>
                                         <a href="#">Gear</a>
                                         <a href="#">Wardrobe</a>
                                      </div>
                                      <div className="tag-detail">
                                         <strong>Tags:</strong>
                                         <a href="#">Equipment</a>
                                         <a href="#">Travel kit</a>
                                         <a href="#">Waterproof</a>
                                         <a href="#">windproof</a>
                                      </div>
                                   </div>
                                   <div className="product-desc">
                                      <p>Dolores iaculis cupidatat sapiente? Omnis condimentum vulputate facilisi in arcu adipiscing animi mollitia iste! Praesentium, quasi! Ullamcorper suspendisse! Adipiscing mauris. Vestibulum eos magni sociosqu, dignissimos officia! Iste mollis, diam lacus.</p>
                                      <p>Sagittis sapien mattis nec, gravida corrupti nunc placeat. Voluptatum odit. Ea debitis nisi! In dolor.</p>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>   
                    </div>
                    {/* <div className="product-tab-outer">
                       <div className="container">
                       <TabContext value={value}>
                          <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <TabStyled label="Deskripsi" value="1" />
                            <TabStyled label="Informasi Tambahan" value="2" />
                          </TabList>
                        <TabPanelStyled value="1">Item One</TabPanelStyled>
                        <TabPanelStyled value="2">Item Two</TabPanelStyled>
                      </TabContext>
                       </div>
                    </div> */}
                 </div>
              {/* <!-- product section html end --> */}
           </main>
        </div>
    )
  }
}
