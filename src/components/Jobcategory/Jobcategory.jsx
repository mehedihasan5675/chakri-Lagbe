import React from 'react';

const Jobcategory = ({job}) => {
    console.log(job);
    const {title,iconUrl,seats}=job
    return (
        <>
            <div className='bg-gray-100 p-8 rounded-md  shadow-md'>
                <img className='w-20 h-20 rounded-md' src={iconUrl} alt="icon" />
                <h1 className='my-2 font-semibold text-base md:text-lg lg:text-xl'>{title}</h1>
                <h1 className='text-base text-gray-500 '>{seats}+ Jobs Available</h1>

            </div>
        </>
    );
};

export default Jobcategory;