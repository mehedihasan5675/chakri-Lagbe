import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
const AppliedCart = ({job,handleCancelbtn}) => {
    const {companyName,companyLogo,jobTitle,jobCategory,location,salaryRange,id}=job
    
    return (
        <>
        
        <div className=' w-full lg:w-11/12 mx-auto sm:px-10 md:px-12 lg:px-16 py-5'>
            <div className='border-gray-200 flex items-center justify-between border-2 rounded-lg p-4 md:p-7 lg:p-10 shadow-lg'>
                <div className='flex md:gap-5 xl:gap-8 gap-3 items-center'>
                <img src={companyLogo} className='md:w-32  bg-gray-200 p-5 rounded-md md:h-32 w-24 h-24  ' alt="" />
                <div>
                <h1 className='text-gray-600 font-bold text-sm md:text-xl  '>{jobTitle}</h1>
                <h1 className='text-gray-500 font-medium text-sm md:text-lg '>{companyName}</h1>
                <div className='flex lg:gap-6 gap-2 my-3'>
                    {
                       
                        jobCategory.map((jc,i)=><span key={i} className='animate-text bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-semibold capitalize border lg:px-3 px-2   lg:py-1 rounded-md border-indigo-300'>{jc}</span>)
                    }
                </div>
                <div className='text-gray-500 font-medium text-xs md:text-sm lg:text-base flex xl:gap-4  flex-col xl:flex-row'>
                    <span className='flex-shrink-0'><MapPinIcon height={16} className='inline-block mb-1 text-green-400 '/>{location}</span>
                    <span className='flex-shrink-0'><CurrencyDollarIcon height={16} className='inline-block mb-1  text-green-400 '/>{salaryRange}</span>
                </div>
                </div>
                </div>
                <div className='flex-shrink-0 flex flex-col xl:flex-row  md:gap-5 gap-3'>
                <Link  to="/job-details"><button className='btn text-xs md:text-sm lg:text-base' >View Details</button></Link>
                <button onClick={()=>handleCancelbtn(id)} className='btn2 text-xs md:text-sm lg:text-base'>Cancel</button>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default AppliedCart;