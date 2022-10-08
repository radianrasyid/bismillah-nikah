import React from 'react'
import TableReferred from '../components/TableReferred'
import TableGroupMember from '../components/TableGroupMember'
import TableAllUser from '../components/TableAllUser'

export default function AdminProfile() {
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
                        <h4>Referred</h4>
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
                        <h4>Users</h4>
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
}
