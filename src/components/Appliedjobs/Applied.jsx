import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import '../../utilities/common.css';
import { getAppliedJob, removeFromDb } from '../../utilities/fakedb';
import AppliedCart from '../AppliedCart/AppliedCart';

const Applied = () => {
    const navigate=useNavigate()
  const handleNavigate=()=>{
    navigate(-1)
  }
    const mainData=useLoaderData()
    const [jobForFilter,setJobForFilter]=useState([])
    const [job,setJob]=useState([])
    const appliedJob=getAppliedJob()
const handleCancelbtn=(id)=>{
    console.log(id,"cancel");
    const remaining=job.filter(j=>j.id != id)
    setJob(remaining)
    removeFromDb(id)
}
const handleRemoteJob=()=>{
const remaining=jobForFilter.filter(j=>j.jobCategory.includes('remote'))
    setJob(remaining)
}
const handleOnsiteJob=()=>{
const remaining=jobForFilter.filter(j=>j.jobCategory.includes('onsite'))
    setJob(remaining)
}
    useEffect(()=>{

        let newArray=[]
        if(appliedJob){
            for(const id in appliedJob){
                const appliedArray=mainData.find(ap=>ap.id ==id)
                // console.log(appliedArray);
               newArray.push(appliedArray)
                    }
        }
        setJob(newArray)
        setJobForFilter(newArray)
    },[])
    console.log(job);

    return (
        <>
        
            <div className='bg-gray-100 relative md:py-6 py-2 lg:py-8'>
                <img className='lg:w-64 md:w-52 w-36 absolute left-0 bottom-0' src="Vector.png" alt="" />
                <img className='lg:w-64 md:w-52 w-36 absolute -top-16 right-0' src="Vector-1.png" alt="" />
                <h1 className='font-normal text-center lg:text-4xl md:text-2xl text-xl'>Applied Jobs</h1>
            </div>
            
            <div  className=' main_container rounded-lg mx-auto mt-10 md:mt-16 text-right w-full  sm:w-10/12'>
                <h1 className='   py-2 px-3 rounded-lg tracking-wider bg-gray-200 md:text-lg text-base font-semibold  inline  '>Filter By</h1>
                <div className='flex mt-5 justify-end gap-2'>
                <button className='bg-gradient-to-r from-indigo-400  to-purple-500 text-white font-medium px-2 sm:px-4 py-2 sm:py-3 text-sm  md:text-base lg:text-base tracking-wide rounded-md xl:text-xl  inline ' onClick={handleRemoteJob}>Show Remote Job</button>
                <button className='bg-gradient-to-r from-indigo-400  to-purple-500 text-white font-medium px-2 sm:px-4 py-2 sm:py-3 text-sm  md:text-base lg:text-base tracking-wide rounded-md xl:text-xl  inline' onClick={handleOnsiteJob}>Show Onsite Job</button>
                </div>
            

        </div >
            <div className='main_container md:my-10 my-1'>
                {
                    job.map(j=><AppliedCart handleCancelbtn={handleCancelbtn} key={j.id} job={j}></AppliedCart>)
                }
            </div>

            <div className='text-center my-10   sticky bottom-5 left-0 inline-block main_container'>
            <button onClick={handleNavigate} className='btn  rounded-full  opacity-90 text-sm md:text-xl font-semibold'>Back</button>
            </div>
        </>
    );
};

export default Applied;