import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import Header from '../Header/Header';


const Topics = () => {
    const topics = useLoaderData();
    const {data} = topics;

    return (
        <div>
            <div>
            <Header ></Header>
            </div>
            <div className="bg-gray-100 grid grid-cols-4 res-class">
                {
                    data.map(data => <Topic  key={data.id} data= {data}></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;