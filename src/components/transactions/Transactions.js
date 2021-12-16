import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getTransactions } from '../../helpers/Connections'
import './Transactions.css'
import money from '../../assets/money.png'
const Transactions = ({transactions}) => {
    console.log(transactions)
    return (
        <div>
            <br />
            
            <table className='transactions-table'>
  <tr>
      <th></th>
    
    <th>Merchant</th>
   
    <th>Amount</th>
    <th>Date</th>
  </tr>
 {transactions && transactions.map(transaction => (
     <tr>
         <td><img src={money} height="50" alt="" /></td>
         <td className='trans-cat'>{transaction.name}</td>
         <td className='trans-amount'>{transaction.amount}</td>
         <td className='trans-date'>{transaction.date}</td>
        
        
     </tr>

 ))}
</table>
        </div>
    )
}

export default Transactions
