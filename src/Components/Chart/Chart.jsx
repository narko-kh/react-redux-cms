import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Chart.css'

const data = [
    {
        name: 'Jan',
        Sale: 4000,
        Purchase: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        Sale: 3000,
        Purchase: 1398,
        amt: 2210,
    },
    {
        name: 'Mar',
        Sale: 2000,
        Purchase: 9800,
        amt: 2290,
    },
    {
        name: 'Apr',
        Sale: 2780,
        Purchase: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        Sale: 1890,
        Purchase: 4800,
        amt: 2181,
    },
    {
        name: 'Jun',
        Sale: 2390,
        Purchase: 3800,
        amt: 2500,
    },
    {
        name: 'Jul',
        Sale: 3590,
        Purchase: 4500,
        amt: 2500,
    },
    {
        name: 'Aug',
        Sale: 3490,
        Purchase: 4300,
        amt: 2100,
    },
    {
        name: 'Sep',
        Sale: 2490,
        Purchase: 2000,
        amt: 2100,
    },
    {
        name: 'Oct',
        Sale: 1490,
        Purchase: 4000,
        amt: 3100,
    },
    {
        name: 'Nov',
        Sale: 3090,
        Purchase: 2000,
        amt: 2100,
    },
    {
        name: 'Dec',
        Sale: 1490,
        Purchase: 3000,
        amt: 1500,
    },
];

export default function Chart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="Purchase" stroke="#246dec" fill="#246dec" />
                <Area type="monotone" dataKey="Sale" stroke="#367952" fill="#367952" />
            </AreaChart>
        </ResponsiveContainer>
    );

}