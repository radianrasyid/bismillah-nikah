import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import TableReferred from './components/TableReferred';
import TableGroupMember from './components/TableGroupMember';
import TableAllUser from './components/TableAllUser';

export default function UserProfile() {

    let MOCK_DATA = [];
    const [loading, setLoading] = React.useState(false);
    const [role, setRole] = React.useState("admin")

    const loopData = async() => {
        for(let i = 0; i<51; i++){
            await MOCK_DATA.push({
                id: i,
                name: "John Doe",
                date: "12/12/2000",
                city: "Jakarta",
                activated: i % 2 == 0 ? "active" : "tbd"
            })
        }
    }

    React.useEffect(() => {
        setLoading(true)
        loopData()
        setLoading(false)
    })

  if(loading == true){
    return(
        <div>
            LOADING
        </div>
    )
  }else{
    if(role == "admin"){
        return (
            <div>
              <div className="row">
                {/* <!-- Item --> */}
                <div className="col-xl-3 col-sm-6">
                    <div className="db-info-list">
                        <div className="dashboard-stat-icon bg-blue br-8">
                            <i className="far fa-chart-bar"></i>
                        </div>
                        <div className="dashboard-stat-content">
                            <h4>User Referred</h4>
                            <h5>22,520</h5> 
                        </div>
                    </div>
                </div>
                {/* <!-- Item --> */}
                <div className="col-xl-3 col-sm-6">
                    <div className="db-info-list">
                        <div className="dashboard-stat-icon bg-green br-8">
                            <i className="fas fa-dollar-sign"></i>
                        </div>
                        <div className="dashboard-stat-content">
                            <h4>Active Users</h4>
                            <h5>16,520</h5> 
                        </div>
                    </div>
                </div>
                {/* <!-- Item --> */}
                <div className="col-xl-3 col-sm-6">
                    <div className="db-info-list">
                        <div className="dashboard-stat-icon bg-purple br-8">
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="dashboard-stat-content">
                            <h4>Total Users</h4>
                            <h5>18,520</h5> 
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="db-info-list">
                        <div className="dashboard-stat-icon bg-red br-8">
                            <i className="far fa-envelope-open"></i>
                        </div>
                        <div className="dashboard-stat-content">
                            <h4>Eligible</h4>
                            <h5>19,520</h5> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="dashboard-box table-opp-color-box">
                        <h4>Referred Users</h4>
                        <p>This section shows referred member from an active user</p>
                        <div className='mui-table-container'>
                            <TableReferred/>
                        </div>
                    </div>
                </div> 
                <div className="col-lg-6">
                    <div className="dashboard-box table-opp-color-box">
                        <h4>User Status</h4>
                        <p>This section shows every group member status</p>
                        <div className='mui-table-container'>
                            <TableGroupMember/>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="dashboard-box">
                        <h4>User Details</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                        <div className='mui-table-container'>
                            <TableAllUser/>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="row">
                {/* <!-- site traffic --> */}
                <div className="col-lg-4">
                    <div className="dashboard-box chart-box">
                        <h4>Site Traffic</h4>
                        <div id="chartContainer" style={{ height: "250px", width: "100%" }}></div>
                    </div>
                </div>
        
                <div className="col-lg-4">
                    <div className="dashboard-box chart-box">
                        <h4>Bar Chart</h4>
                        <div id="barchart" style={{ height: "250px", width: "100%" }}></div>
                    </div>
                </div>
        
                <div className="col-lg-4 chart-box">
                    <div className="dashboard-box">
                        <h4>Search Engine</h4>
                        <div id="piechart" style={{ height: "250px", width: "100%" }}></div>
                    </div>
                </div>
            </div>
            </div>
          )
    }else if(role == "leader"){
        return (
            <div>
              <div className="row">
                {/* <!-- Item --> */}
                <div className="col-xl-3 col-sm-6">
                    <div className="db-info-list">
                        <div className="dashboard-stat-icon bg-blue br-8">
                            <i className="far fa-chart-bar"></i>
                        </div>
                        <div className="dashboard-stat-content">
                            <h4>Members</h4>
                            <h5>22,520</h5> 
                        </div>
                    </div>
                </div>
                {/* <!-- Item --> */}
                <div className="col-xl-3 col-sm-6">
                    <div className="db-info-list">
                        <div className="dashboard-stat-icon bg-green br-8">
                            <i className="fas fa-dollar-sign"></i>
                        </div>
                        <div className="dashboard-stat-content">
                            <h4>Active Members</h4>
                            <h5>16,520</h5> 
                        </div>
                    </div>
                </div>
                {/* <!-- Item --> */}
                <div className="col-xl-3 col-sm-6">
                    <div className="db-info-list">
                        <div className="dashboard-stat-icon bg-purple br-8">
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="dashboard-stat-content">
                            <h4>Eligible Pin</h4>
                            <h5>18,520</h5> 
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="db-info-list">
                        <div className="dashboard-stat-icon bg-red br-8">
                            <i className="far fa-envelope-open"></i>
                        </div>
                        <div className="dashboard-stat-content">
                            <h4>OK Members</h4>
                            <h5>19,520</h5> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="dashboard-box table-opp-color-box">
                        <h4>Referred Members</h4>
                        <p>This section shows referred member from an active user</p>
                        <div className='mui-table-container'>
                            <TableReferred/>
                        </div>
                    </div>
                </div> 
                <div className="col-lg-6">
                    <div className="dashboard-box table-opp-color-box">
                        <h4>group analytics</h4>
                        <p>This section shows every group member status</p>
                        <div className='mui-table-container'>
                            <TableGroupMember/>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="dashboard-box">
                        <h4>User Details</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Country</th>
                                        <th>Listings</th>
                                        <th>Enquiry</th>
                                        <th>Bookings</th>
                                        <th>Reviews</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span className="list-img"><img src="assets/images/comment.jpg" alt=""/></span>
                                        </td>
                                        <td><a href="#"><span className="list-name">Kathy Brown</span><span className="list-enq-city">United States</span></a>
                                        </td>
                                        <td>+01 3214 6522</td>
                                        <td>chadengle@dummy.com</td>
                                        <td>Australia</td>
                                        <td>
                                            <span className="badge badge-primary">02</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-danger">12</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-success">24</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-dark">36</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="list-img"><img src="assets/images/comment2.jpg" alt=""/></span>
                                        </td>
                                        <td><a href="#"><span className="list-name">Kathy Brown</span><span className="list-enq-city">United States</span></a>
                                        </td>
                                        <td>+01 3214 6522</td>
                                        <td>chadengle@dummy.com</td>
                                        <td>Australia</td>
                                        <td>
                                            <span className="badge badge-primary">02</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-danger">12</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-success">24</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-dark">36</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="list-img"><img src="assets/images/comment3.jpg" alt=""/></span>
                                        </td>
                                        <td><a href="#"><span className="list-name">Kathy Brown</span><span className="list-enq-city">United States</span></a>
                                        </td>
                                        <td>+01 3214 6522</td>
                                        <td>chadengle@dummy.com</td>
                                        <td>Australia</td>
                                        <td>
                                            <span className="badge badge-primary">02</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-danger">12</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-success">24</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-dark">36</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="list-img"><img src="assets/images/comment4.jpg" alt=""/></span>
                                        </td>
                                        <td><a href="#"><span className="list-name">Kathy Brown</span><span className="list-enq-city">United States</span></a>
                                        </td>
                                        <td>+01 3214 6522</td>
                                        <td>chadengle@dummy.com</td>
                                        <td>Australia</td>
                                        <td>
                                            <span className="badge badge-primary">02</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-danger">12</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-success">24</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-dark">36</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="row">
                {/* <!-- site traffic --> */}
                <div className="col-lg-4">
                    <div className="dashboard-box chart-box">
                        <h4>Site Traffic</h4>
                        <div id="chartContainer" style={{ height: "250px", width: "100%" }}></div>
                    </div>
                </div>
        
                <div className="col-lg-4">
                    <div className="dashboard-box chart-box">
                        <h4>Bar Chart</h4>
                        <div id="barchart" style={{ height: "250px", width: "100%" }}></div>
                    </div>
                </div>
        
                <div className="col-lg-4 chart-box">
                    <div className="dashboard-box">
                        <h4>Search Engine</h4>
                        <div id="piechart" style={{ height: "250px", width: "100%" }}></div>
                    </div>
                </div>
            </div>
            </div>
          )
    }else if(role == "member"){
        return (
            <div>
              <div className="row">
                {/* <!-- Item --> */}
                <div className="col-xl-3 col-sm-6">
                    <div className="db-info-list">
                        <div className="dashboard-stat-icon bg-blue br-8">
                            <i className="far fa-chart-bar"></i>
                        </div>
                        <div className="dashboard-stat-content">
                            <h4>User Referred</h4>
                            <h5>22,520</h5> 
                        </div>
                    </div>
                </div>
                {/* <!-- Item --> */}
                <div className="col-xl-3 col-sm-6">
                    <div className="db-info-list">
                        <div className="dashboard-stat-icon bg-green br-8">
                            <i className="fas fa-dollar-sign"></i>
                        </div>
                        <div className="dashboard-stat-content">
                            <h4>Active Referred</h4>
                            <h5>16,520</h5> 
                        </div>
                    </div>
                </div>
                {/* <!-- Item --> */}
                <div className="col-xl-3 col-sm-6">
                    <div className="db-info-list">
                        <div className="dashboard-stat-icon bg-purple br-8">
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="dashboard-stat-content">
                            <h4>Progress</h4>
                            <h5>18,520</h5> 
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="db-info-list">
                        <div className="dashboard-stat-icon bg-red br-8">
                            <i className="far fa-envelope-open"></i>
                        </div>
                        <div className="dashboard-stat-content">
                            <h4>Eligible</h4>
                            <h5>19,520</h5> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="dashboard-box table-opp-color-box">
                        <h4>Referred Users</h4>
                        <p>This section shows referred member from an active user</p>
                        <div className='mui-table-container'>
                            <TableReferred/>
                        </div>
                    </div>
                </div> 
                <div className="col-lg-6">
                    <div className="dashboard-box table-opp-color-box">
                        <h4>Transaction History</h4>
                        <p>This section shows every group member status</p>
                        <div className='mui-table-container'>
                            <TableGroupMember/>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="dashboard-box">
                        <h4>User Details</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Country</th>
                                        <th>Listings</th>
                                        <th>Enquiry</th>
                                        <th>Bookings</th>
                                        <th>Reviews</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span className="list-img"><img src="assets/images/comment.jpg" alt=""/></span>
                                        </td>
                                        <td><a href="#"><span className="list-name">Kathy Brown</span><span className="list-enq-city">United States</span></a>
                                        </td>
                                        <td>+01 3214 6522</td>
                                        <td>chadengle@dummy.com</td>
                                        <td>Australia</td>
                                        <td>
                                            <span className="badge badge-primary">02</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-danger">12</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-success">24</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-dark">36</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="list-img"><img src="assets/images/comment2.jpg" alt=""/></span>
                                        </td>
                                        <td><a href="#"><span className="list-name">Kathy Brown</span><span className="list-enq-city">United States</span></a>
                                        </td>
                                        <td>+01 3214 6522</td>
                                        <td>chadengle@dummy.com</td>
                                        <td>Australia</td>
                                        <td>
                                            <span className="badge badge-primary">02</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-danger">12</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-success">24</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-dark">36</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="list-img"><img src="assets/images/comment3.jpg" alt=""/></span>
                                        </td>
                                        <td><a href="#"><span className="list-name">Kathy Brown</span><span className="list-enq-city">United States</span></a>
                                        </td>
                                        <td>+01 3214 6522</td>
                                        <td>chadengle@dummy.com</td>
                                        <td>Australia</td>
                                        <td>
                                            <span className="badge badge-primary">02</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-danger">12</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-success">24</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-dark">36</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="list-img"><img src="assets/images/comment4.jpg" alt=""/></span>
                                        </td>
                                        <td><a href="#"><span className="list-name">Kathy Brown</span><span className="list-enq-city">United States</span></a>
                                        </td>
                                        <td>+01 3214 6522</td>
                                        <td>chadengle@dummy.com</td>
                                        <td>Australia</td>
                                        <td>
                                            <span className="badge badge-primary">02</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-danger">12</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-success">24</span>
                                        </td>
                                        <td>
                                            <span className="badge badge-dark">36</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="row">
                {/* <!-- site traffic --> */}
                <div className="col-lg-4">
                    <div className="dashboard-box chart-box">
                        <h4>Site Traffic</h4>
                        <div id="chartContainer" style={{ height: "250px", width: "100%" }}></div>
                    </div>
                </div>
        
                <div className="col-lg-4">
                    <div className="dashboard-box chart-box">
                        <h4>Bar Chart</h4>
                        <div id="barchart" style={{ height: "250px", width: "100%" }}></div>
                    </div>
                </div>
        
                <div className="col-lg-4 chart-box">
                    <div className="dashboard-box">
                        <h4>Search Engine</h4>
                        <div id="piechart" style={{ height: "250px", width: "100%" }}></div>
                    </div>
                </div>
            </div>
            </div>
          )
    }
  }
}
