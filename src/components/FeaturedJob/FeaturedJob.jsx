import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../utilities/common.css';
import { setDataInLocal } from '../../utilities/fakedb';

const FeaturedJob = ({job}) => {
    const {id,companyName,jobTitle,location,salaryRange,jobCategory,companyLogo}=job


const handleViewDetails=(id)=>{
    setDataInLocal(id)
    // console.log('id,',id);
}

    return (
        <>
            <div className='border-gray-200 border-2 rounded-lg p-8 md:p-10 shadow-lg'>
                <img src={companyLogo} className='md:w-32 md:h-32 w-16 h-16 mb-7' alt="" />
                <h1 className='text-gray-600 font-bold text-base md:text-xl lg:text-2xl my-1 lg:my-2'>{jobTitle}</h1>
                <h1 className='text-gray-500 font-medium text-sm md:text-lg lg:text-xl'>{companyName}</h1>
                <div className=' flex lg:gap-6 gap-2 my-3'>
                    {
                        
                        jobCategory.map((jc,i)=><span key={i} className='animate-text bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-semibold capitalize border lg:px-3 px-2   lg:py-1 rounded-md border-indigo-300'>{jc}</span>)
                    }
                </div>
                <div className='text-gray-500 font-medium text-sm md:text-base lg:text-lg flex md:gap-4 my-3 gap-3 lg:gap-8'>
                    <span ><MapPinIcon height={18} className='inline-block mb-1 text-green-400 '/>{location}</span>
                    <span><CurrencyDollarIcon height={18} className='inline-block mb-1  text-green-400 '/>{salaryRange}</span>
                </div>
                <Link  to="/job-details"><button className='btn' onClick={()=>handleViewDetails(id)}>View Details</button></Link>
            </div>
        </>
    );
};

export default FeaturedJob;