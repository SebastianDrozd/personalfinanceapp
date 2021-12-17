import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAccountBalances } from '../../helpers/Connections'
import Account from '../account/Account'
import profile from '../../assets/profile.jpg'
import './Sidebar.css'
const Sidebar = () => {
    
    const [accounts,setAccounts] = useState([])
    const username = useSelector(state => state.user.username)
    useEffect(() => {
        let jwt = localStorage.getItem("token")
        getAccountBalances(username,jwt).then(response => {console.log(response);
        setAccounts(response.data.accounts)})
    },[])
   
    return (
        <>
        <div className="sidebar-outer-container">
        <div className="sidebar-logo">
            <img src={profile} alt="" />
        </div>
        <div>
        <div className="sidebar-icon sidebar-icon-active">
        <p><i class="fa fa-home" aria-hidden="true"></i></p>
        </div>
        <div className="sidebar-icon">
        <p><i class="fa fa-google-wallet" aria-hidden="true"></i></p>
        </div>
        <div className="sidebar-icon">
        <p><i class="fa fa-credit-card-alt" aria-hidden="true"></i></p>
        </div>
        <div className="sidebar-icon">
        <p><i class="fa fa-cc-diners-club" aria-hidden="true"></i></p>
        </div>
        <div className="sidebar-icon">
        <p><i class="fa fa-paypal" aria-hidden="true"></i></p>
        </div>
        </div>
        
        </div>
        </>
    )
}

export default Sidebar
