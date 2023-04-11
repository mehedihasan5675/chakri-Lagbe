import React from 'react';

const DetailsCart = ({singleJob}) => {
    const {jobTitle,email,salaryRange,phone,location}=singleJob
    console.log(singleJob);
    return (
        <div className='bg-gradient-to-r from-indigo-100  to-purple-100  px-3 md:px-4 py-4 md:py-8  rounded-md tracking-wider '>
            
            <h1 className='text-gray-700  font-semibold text-base'>Job Details</h1>
            <hr className='h-[3px] mt-4  bg-gray-100' />
            <div className='mt-4'>
                <h2 className='text-gray-500  '><span className='text-gray-700  font-semibold text-base'>Salary :</span>{salaryRange}  /month</h2>
                <h2 className='text-gray-500  mt-1'><span className='text-gray-700  font-semibold text-base'>Job Title :</span> {jobTitle}</h2>
                <h1 className='text-gray-700  font-semibold text-base my-3'>Contact Information</h1>
                <hr className='h-[3px]  bg-gray-100' />
            </div>
            <div className='mt-5'>
            <h2 className='text-gray-500  '><span className='text-gray-700  font-semibold text-base'>Phone :</span> {phone}</h2>
            <h2 className='text-gray-500 my-1'><span className='text-gray-700  font-semibold text-base'>Email :</span> {email}</h2>
            <h2 className='text-gray-500  '><span className='text-gray-700  font-semibold text-base'>Address :</span> {location}</h2>
            </div>
            
            
        </div>
    );
};

export default DetailsCart;