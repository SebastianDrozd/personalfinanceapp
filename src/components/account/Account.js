import React from 'react'
import './Accounts.css'
const Account = ({accountName,balances}) => {
    return (
        <>
          <div className="account-outer-container">
              <p className='sidebar-account-name'>{accountName}</p>
                <p className='sidebar-account-balance'>Balance: ${balances.available}</p>
              </div>  
        </>
    )
}

export default Account
