import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({data}) => {
    const {id, logo, name, total}=data;

    return (
        <div className='p-10'>
            <div className='card-container p-5 shadow-lg border-2 rounded-md '>
                <div className='bg-gray-600 border-2 rounded-xl p-5 '>
                    <div className='w-100'>
                    <img  src={logo} alt="" />
                    </div>
                    <div className="text-white">
                    <p className=''>{name}</p>
                    <p>Total Question: {total}</p>
                    </div>
                </div>
                <Link to={`/topic/${id}`}><button className='bg-red-600 hover:bg-orange-600 text-white px-5 py-3 w-3/4 rounded-md'  >  Start Quiz</button></Link>
            </div>
        </div>
    );
};

export default Topic;