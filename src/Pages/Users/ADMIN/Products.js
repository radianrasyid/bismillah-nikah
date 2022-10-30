import React from 'react'
import { Row, Col } from "react-bootstrap";
import { Card, CardActions, CardContent, Button, Typography } from "@mui/material";
import MOCK_DATA from "../../assets/DATAS/MOCK_DATA.json"
import formatRupiah from '../../functions/formatRupiah';

export default function Products() {
    
    const [data, setData] = React.useState([])

    const fetchData = async(e) => {
        await fetch("https://umrohwebsite.herokuapp.com/api/v1/program", {
            method: "GET",
            mode: 'cors',
        }).then(async(res) => {
            let hasil = await res.json();
            let hasilData = await hasil.data;
            setData(hasilData);
        })
    }

    React.useEffect(() => {
        fetchData();
    }, [])

  return (
    <div>
        <Row className='gy-4 gx-4'>
            {
                data.map((item, index) => {
                    const link = `http://localhost:3000/tourpackages/${item.id}`
                  return(
                     <div className="col-lg-4 col-md-6">
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
                              </div>
                           </div>
                        </div>
                     </div>
                  )
                })
            }
        </Row>
    </div>
  )
}
