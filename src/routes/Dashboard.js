import React, { useEffect } from 'react'
import './Css/Dashboard.css'
import Sidebar from '../components/sidebar/Sidebar'
import DashboardContainer from '../containers/dashboardContainer/DashboardContainer'
const Dashboard = () => {
    useEffect(() => {
        
    })
    return (
        <div className='dashboard-outer-container'>
         <div className="dashboard-sidebar">
             <Sidebar/>
         </div>
         <div className="dashboard-main-content">
             <DashboardContainer/>
         </div>
        </div>
    )
}

export default Dashboard
