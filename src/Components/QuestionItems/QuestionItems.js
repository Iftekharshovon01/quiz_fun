import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import {toast} from 'react-toastify'

const QuestionItems = ({abbas}) => {
    const {correctAnswer, question, options} = abbas;

    // const handleAns =(abbas)=>{
    //     if (abbas=== correctAnswer) {
            
    //     }
    // }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className=' flex justify-between'>
                        <h2 className="card-title">Question: {question}</h2>
                        
                        {/* <EyeIcon onClick={handleCorrectAnsr} className="h-6 w-6 text-blue-500" /> */}
                    </div>
                    <div className="card-actions justify-center grid md:grid-cols-2 mt-3">
                        {
                            options.map(rahim => <div className='border p-2' key={rahim}>
                                {/* <input onClick={() => handleAnsr(rahim)} type="radio" id={rahim} name={question} value={rahim} /> */}
                                <label htmlFor={rahim}>{rahim}</label>
                            </div>

                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionItems;