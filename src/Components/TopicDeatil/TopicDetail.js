import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionItems from '../QuestionItems/QuestionItems';

const TopicDetail = () => {
    const quizes = useLoaderData();
    const {data} = quizes;
    const {name, questions} = data;
    return (
        <div className='p-10'>
            <p className='text-white'>{name}</p>
            {
                questions.map(abbas=> <QuestionItems key={abbas.id} abbas={abbas}></QuestionItems>)
            }
        </div>
    );
};

export default TopicDetail;