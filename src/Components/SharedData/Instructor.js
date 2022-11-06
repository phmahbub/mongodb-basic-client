import React from 'react';

const Instructor = ({ tutor }) => {
    const { name, designation, poho } = tutor
    return (
        
            <div className='grid grid-cols-12 border border-slate-100 mb-1 py-5 rounded bg-slate-200'>

                <div className='col-span-2 flex flex-col items-center justify-center'>
                    <img className='w-20 h-20 rounded-full' src={tutor.photo} alt="" />
                </div>
                <div className="col-span-8 flex flex-col justify-center items-center  ">
                    <p className='text-xl font-semibold'>{name}</p>
                    <p className='text-sm'>{designation}</p>
                </div>
            </div>
    
    );
};

export default Instructor;