import React from 'react'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import "./chart.scss"

const data = [
    {
        name: 'Jan',
        total: 2100
    },
    {
        name: 'Feb',
        total: 1000
    },
    {
        name: 'Mar',
        total: 1200
    },
    {
        name: 'Apr',
        total: 2300
    },
    {
        name: 'May',
        total: 1500
    },
    {
        name: 'Jun',
        total: 800
    },
    {
        name: 'Jul',
        total: 700
    },
    {
        name: 'Aug',
        total: 1500
    },
    {
        name: 'Sep',
        total: 2500
    },
    {
        name: 'Oct',
        total: 1800
    },
    {
        name: 'Nov',
        total: 3200
    },
    {
        name: 'Dec',
        total: 1100
    },
  ];
  

function Chart({aspect, title}) {
    return (
        <div className="chart">
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart 
                    width={730}     
                    height={250} 
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#029e7c" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#029e7c" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="gray" />
                    <YAxis stroke="gray" />
                    <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#006952" fillOpacity={1} fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
