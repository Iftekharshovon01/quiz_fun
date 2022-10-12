import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart } from 'recharts';

const Stastics = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='py-20 font-bold'>
        <BarChart width={150} height={40} data={data}>
            
          <Bar dataKey="" fill="#8884d8" />
       
        </BarChart>
        </div>
    );
};

export default Stastics;