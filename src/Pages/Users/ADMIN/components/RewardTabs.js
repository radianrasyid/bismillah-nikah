import React from 'react'
import { Row, Col, Card, ProgressBar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { FormHelperText, styled, Button } from '@mui/material';

const StyledButton = styled(Button)(({theme}) => ({
    '&:hover':{
        backgroundColor: "#385c5a",
        boxShadow: "none",
        textTransform: "none"
    },
    backgroundColor: "rgba(65, 125, 122, 1)",
    boxShadow: "none",
    borderRadius: "8px",
    textTransform: "none",
    fontWeight: "600"
}))

export default function RewardTabs() {

    const currentUser = useSelector((state) => state.auth);
    let [activeChild, setActiveChild] = React.useState(null);

    const [data, setData] = React.useState([])

    const fetchData = async(e) => {
        await fetch("https://umrohwebsite.herokuapp.com/api/v1/reward", {
            method: "GET",
            mode: "cors",
            headers: {
                'Authorization': `Bearer ${currentUser.token}`
            }
        }).then(async(res) => {
            let hasil = await res.json();
            let hasilData = hasil.data;
            setData(hasilData);

            let members = currentUser.referrerId.filter((item) => {
                if(item.status == 2){
                    return item
                }else{
                    return []
                }
            })

            setActiveChild(members)
        })
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    let amount = activeChild == null ? 0 : activeChild.length

  return (
    <div>
        <Row className='gy-3'>
                {
                    data.map((item, index) => {
                        if(item.status == 0){
                            return(
                                <Col lg={6}>
                                    <Card className="card-reward">
                                        <Card.Img variant="top" src={item.image} />
                                        <Card.Body>
                                            <Card.Title className='dashboard-user-welcome-title'>{item.name}</Card.Title>
                                            <Card.Text className='dashboard-user-program-text' style={{ fontSize: "12px"}}>Dapatkan kesempatan lebih baik dengan mengajak lebih banyak teman anda</Card.Text>
                                            <ProgressBar now={activeChild == null ? 0 : activeChild.length} max={item.amountUmroh} min={0} variant={"info"}/>
                                            <FormHelperText>
                                                <small className='dashboard-user-welcome-info'><b>{activeChild == null ? 0 : activeChild.length}</b> Mitra jamaah didapatkan / <b>{item.terms_umroh}</b></small>
                                            </FormHelperText>
                                            <StyledButton className="mt-2" variant='contained' size="small" type="button"
                                            disabled={amount === item.amountUmroh || amount === item.amountHaji ? false : true }
                                            >Klaim</StyledButton>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }else if(item.status == 1){
                            return(
                                <Col lg={6}>
                                    <Card className="card-reward">
                                        <Card.Img variant="top" className='image-reward' src={item.image} />
                                        <Card.Body>
                                            <Card.Title className='dashboard-user-welcome-title'>{item.name}</Card.Title>
                                            <Card.Text className='dashboard-user-program-text' style={{ fontSize: "12px"}}>Dapatkan kesempatan lebih baik dengan mengajak lebih banyak teman anda</Card.Text>
                                            <ProgressBar now={activeChild == null ? 0 : activeChild.length} max={item.amountUmroh} min={0} variant={"info"}/>
                                            <FormHelperText>
                                                <small className='dashboard-user-welcome-info'><b>{activeChild == null ? 0 : activeChild.length}</b> Mitra jamaah didapatkan / <b>{item.terms_umroh}</b></small>
                                            </FormHelperText>
                                            <StyledButton className="mt-2" variant='contained' size="small" type="button"
                                            disabled={amount === item.referAmount ? false : true }
                                            >Klaim</StyledButton>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }
                    })
                }
            </Row>
    </div>
  )
}
