import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAccountBalances } from '../../helpers/Connections'
import Account from '../account/Account'
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
        <img height="125" width="125" src="https://av-www.smartrecruiters.com/candidate-portal-ui/static/assets/images/generic/avatar-placeholder-v2.png" alt="Sebastian Drozd" />
        <p className='sidebar-username'>{username}</p>
        <p className='side-bar-accounts-title'>Accounts</p>
        {accounts && accounts.map(account => (<Account accountName={account.name} balances = {account.balances}/>))}
        </div>
        </>
    )
}

export default Sidebar
