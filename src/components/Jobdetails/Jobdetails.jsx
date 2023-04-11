import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getDataInLocal } from '../../utilities/fakedb';
import DetailsCart from '../DetailsCart/DetailsCart';
const Jobdetails = () => {
    const jobId=getDataInLocal()
    const jobData=useLoaderData()
  const singleJob=  jobData.find(dt=>dt.id==jobId)
  const {educationalRequirement:education,experience,jobResponsibility,jobDescription}=singleJob
  console.log(singleJob);
  const navigate=useNavigate()
  const handleNavigate=()=>{
    navigate(-1)
  }
    return (
        <>
            <div className='bg-gray-100 relative md:py-6 py-2 lg:py-8'>
                <img className='lg:w-64 md:w-52 w-36 absolute left-0 bottom-0' src="Vector.png" alt="" />
                <img className='lg:w-64 md:w-52 w-36 absolute -top-16 right-0' src="Vector-1.png" alt="" />
                <h1 className='font-normal text-center lg:text-4xl md:text-2xl text-xl'>Jobs Details</h1>
            </div>
            <div className='lg:py-20 md:py-16 py-8 flex md:flex-row flex-col gap-5  main_container'>
                <div className='md:w-7/12 w-full'>
                     <p className='my-5'><span className='font-semibold'>Job Description:</span> <span className='text-gray-500 tracking-wide'>{jobDescription}</span> </p>
                     <p className='my-5'><span className='font-semibold'>Job Responsibility:</span> <span className='text-gray-500 tracking-wide'>{jobResponsibility}</span> </p>
                     <p className='my-5'><span className='font-semibold'>Educational Requirements:</span> <span className='text-gray-500 tracking-wide'>{education}</span> </p>

                     <p className='my-5'><span className='font-semibold'>Experiences:</span> <span className='text-gray-500 tracking-wide'>{experience}</span> </p>
                     
                </div>
                <div className='md:w-5/12 w-full'>
                <DetailsCart singleJob={singleJob}></DetailsCart>
                </div>
            </div>
            <div className='text-center my-10 sticky bottom-0 left- inline-block main_container'>
            <button onClick={handleNavigate} className='btn  rounded-full  opacity-90 text-sm md:text-xl font-semibold'>Back</button>
            </div>
        </>
    );
};

export default Jobdetails;