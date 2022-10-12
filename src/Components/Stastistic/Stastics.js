import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Stastics = () => {
    const [questions, setQuestions] = useState([])
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data=> setQuestions(data.data.data))
    })
    return (
        <div className='py-20 font-bold'>
            <BarChart width={1000} height={500} data={questions}>
            <Bar dataKey="" fill="#8884d8" />
            <XAxis dataKey='name'/>
            <YAxis dataKey='number'/>
            <Tooltip/>
            </BarChart>
        </div>
    );
};

export default Stastics;