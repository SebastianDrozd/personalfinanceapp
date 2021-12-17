import React, { useEffect, useState,PureComponent } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './NetworthChart.css'

const NetworthChart = () => {
    const data = [
        {
          name: 'Electronics',
          uv: 4000,
         
          amt: 2400,
        },
        {
          name: 'Consuma',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Grocerry',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'other',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Misc',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
       
      ];
    return (
      <>
      <div>
    
        <div className='outer-chart-container'>
            <p className='chart-title'>Top Spending Categories</p>
            <BarChart
          width={700}
          height={400}
          data={data}
          margin={{
            top: 0,
            right: 30,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>
      </div>
      </>
    )
}

export default NetworthChart
