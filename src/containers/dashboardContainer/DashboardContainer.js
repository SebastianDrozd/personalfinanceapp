import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AreaChart2 from '../../components/areachart/AreaChart'
import Bills from '../../components/bills/Bills'

import NetworthChart from '../../components/networthchart/NetworthChart'
import PendingTransactions from '../../components/pendingTransactions/PendingTransactions'
import Transactions from '../../components/transactions/Transactions'
import { getTransactions } from '../../helpers/Connections'
import './DashboardContainer.css'
const DashboardContainer = () => {
    const [fruits,setFruits] = useState(new Map())
    const [chartData, setChartData] = useState(null)
    const [transactions, setTransactions] =useState(null)
    const username = useSelector(state => state.user.username)
    const map2 = new Map()
    const arr = []

    const extractData = (array) => {
        let placecount = 0;
        let special = 0;
        

    }
    const extractData2 = (array) => {
       
        array.map(item => {
            if(fruits.has(item.transactionType)){
                let copy = fruits;
                copy.set(item.transactionType, copy.get(item.transactionType) + 1)
                setFruits(copy)
            }
            else{
                let copy = fruits;
                copy.set(item.transactionType,1);
                setFruits(copy)
            }
            
        } )
    }
    useEffect(()=> {
        let jwt = localStorage.getItem("token")
        getTransactions(username,jwt).then(response => {
            setTransactions(response.data.transactions)
            extractData2(response.data.transactions)
            console.log("this is map",fruits)
           
        })
    },[])
    return (
        <>
        <div className="dash-content-container">
        <div className='dash-totals-container'>
                <p className="dash-totals"> Dashboard</p>
                <div className='dash-sub'>
                    <p className='dash-sub-item dash-sub-item-active'>30d</p>
                    <p className='dash-sub-item'>90d</p>
                    <p className='dash-sub-item'>1Yr</p>
                    <div className='cal-box'><p style={{padding: '10px'}}>July-August</p></div>
                </div>
            </div>
            
            <div className='dash-first-row'>
            <NetworthChart />
           
          
            <Bills/>
          
            </div>
            <Transactions transactions={transactions}/>
        </div>
            
        </>
    )
}

export default DashboardContainer
