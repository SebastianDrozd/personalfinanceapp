import React from 'react'
import './PendingTransactions.css'
import bank from '../../assets/bank.svg'
const PendingTransactions = () => {
    return (
        <>
        <div className="pending-outer-container">
            <div className="title-cont">
                <img src={bank} alt="" />
            <p className="pending-title">Pending Transactions</p>
            </div>
            <hr  />
        </div>
            
        </>
    )
}

export default PendingTransactions
