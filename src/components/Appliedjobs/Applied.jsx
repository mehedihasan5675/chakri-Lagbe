import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getAppliedJob, removeFromDb } from '../../utilities/fakedb';
import AppliedCart from '../AppliedCart/AppliedCart';

const Applied = () => {
    const mainData=useLoaderData()
    const [job,setJob]=useState([])
    const appliedJob=getAppliedJob()
const handleCancelbtn=(id)=>{
    console.log(id,"cancel");
    const remaining=job.filter(j=>j.id != id)
    setJob(remaining)
    removeFromDb(id)
}
    useEffect(()=>{

       { let newArray=[]
        if(appliedJob){
            for(const id in appliedJob){
                const appliedArray=mainData.find(ap=>ap.id ==id)
                // console.log(appliedArray);
               newArray.push(appliedArray)
                    }
        }
        setJob(newArray)}
    },[])
    console.log(job);

    return (
        <>
            <div className='bg-gray-100 relative md:py-6 py-2 lg:py-8'>
                <img className='lg:w-64 md:w-52 w-36 absolute left-0 bottom-0' src="Vector.png" alt="" />
                <img className='lg:w-64 md:w-52 w-36 absolute -top-16 right-0' src="Vector-1.png" alt="" />
                <h1 className='font-normal text-center lg:text-4xl md:text-2xl text-xl'>Applied Jobs</h1>
            </div>
            <div className='main_container my-10 '>
                {
                    job.map(j=><AppliedCart handleCancelbtn={handleCancelbtn} key={j.id} job={j}></AppliedCart>)
                }
            </div>
        </>
    );
};

export default Applied;