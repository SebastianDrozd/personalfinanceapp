import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTransactions } from "../../helpers/Connections";
import "./Transactions.css";
import money from "../../assets/money.png";
import merchant from '../../assets/merchant.png'
import money2 from '../../assets/money2.png'
import time from '../../assets/time.png'
import shop from '../../assets/shop.png'
const Transactions = ({ transactions }) => {
  console.log(transactions);
  return (
    <div className="main-trans-container">
      <br />
     
      <table className="transactions-table">
      
        <tr>
            <th></th>
          <th><img src={merchant} width='45' alt="" /></th>

          <th><img src={money2} width='45' alt="" /></th>
          <th><img src={time} width='45' alt="" /></th>
        </tr>
        {transactions &&
          transactions.map((transaction) => (
            <tr className="transaction-row">
                <td><img src={shop} width="15" alt="" /></td>
              <td className="trans-cat">{transaction.name}</td>
              
              <td className={transaction.amount > 0  ? "trans-amount trans-positive":  "trans-amount trans-negative"}>${transaction.amount}</td>
              <td className="trans-date">{transaction.date}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Transactions;
