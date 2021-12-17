import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AreaChart2 from "../../components/areachart/AreaChart";
import Bills from "../../components/bills/Bills";
import CreditCard from "../../components/creditcard/CreditCard";
import Features from "../../components/features/Features";

import NetworthChart from "../../components/networthchart/NetworthChart";
import PendingTransactions from "../../components/pendingTransactions/PendingTransactions";
import Transactions from "../../components/transactions/Transactions";
import { getTransactions } from "../../helpers/Connections";
import "./DashboardContainer.css";
const DashboardContainer = () => {
  const [fruits, setFruits] = useState(new Map());
  const [chartData, setChartData] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const username = useSelector((state) => state.user.username);
  const map2 = new Map();
  const arr = [];

  const extractData = (array) => {
    let placecount = 0;
    let special = 0;
  };
  const extractData2 = (array) => {
    array.map((item) => {
      if (fruits.has(item.transactionType)) {
        let copy = fruits;
        copy.set(item.transactionType, copy.get(item.transactionType) + 1);
        setFruits(copy);
      } else {
        let copy = fruits;
        copy.set(item.transactionType, 1);
        setFruits(copy);
      }
    });
  };
  useEffect(() => {
    const ele = (document.getElementById("navbar").style.display = "none");
    let jwt = localStorage.getItem("token");
    getTransactions(username, jwt).then((response) => {
      setTransactions(response.data.transactions);
      extractData2(response.data.transactions);
      console.log("this is map", fruits);
    });
  }, []);
  return (
    <>
      <br />
      <br />
      <div className="dash-top-row">
        <p
          style={{ marginLeft: "2em", fontSize: "30px" }}
          className="dash-totals"
        >
          {" "}
          Dashboard
        </p>
        <div className="top-icons">
          <div className="search-bar">
            <input type="text" />
            <p className="search-icon">
              <i class="fa fa-search" aria-hidden="true"></i>
            </p>
          </div>
          <p className="top-icon">
            <i class="fa fa-bell-o" aria-hidden="true"></i>
          </p>
          <p className="top-icon">
            <i class="fa fa-user-o" aria-hidden="true"></i>
          </p>
        </div>
      </div>

      <Features />
      <div className="dash-content-container">
        <div>
          <br />
          <div className="dash-cards">
            <CreditCard />
            <CreditCard />
          </div>

          <div className="dash-totals-container">
            <p className="dash-totals"> Spending</p>
            <div className="dash-sub">
              <p className="dash-sub-item dash-sub-item-active">30d</p>
              <p className="dash-sub-item">90d</p>
              <p className="dash-sub-item">1Yr</p>
              <div className="cal-box">
                <p style={{ padding: "10px" }}>July-August</p>
              </div>
            </div>
          </div>

          <div className="dash-first-row">
            <NetworthChart />
          </div>
        </div>
        <div>
          <Transactions transactions={transactions} />
        </div>
      </div>
    </>
  );
};

export default DashboardContainer;
