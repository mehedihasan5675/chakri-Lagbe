import Lottie from "lottie-react";
import { Link, useLoaderData } from 'react-router-dom';
import reader from '../../assets/binoculars.json';
import '../../utilities/common.css';

import React, { useEffect, useState } from 'react';
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import Jobcategory from "../Jobcategory/Jobcategory";

const Home = () => {
    const jobData=useLoaderData()
    const [seeAll,setSeeAll]=useState(false)
    const [jobcategory,setJobcategory]=useState([])
    useEffect(()=>{
        fetch('jobcategory.json')
        .then(res=>res.json())
        .then(data=>setJobcategory(data))
    },[])
    console.log(jobData);
    // console.log(jobcategory);
    const handleSeeAll=()=>{
        setSeeAll(true)
    }
    // console.log(seeAll);
    return (
        <>
        {/* Home page Banner part start */}
            <div className='bg-gray-100 py-10 md:py-16 main_container flex flex-col-reverse md:flex-row'>
            <div className='md:w-6/12  w-full   '>
                <h1  className='font-semibold lg:mt-12 lg:w-[450px] lg:text-6xl pb-5 z-10  text-4xl  tracking-wider '>One Step   Closer To Your <br /> <span className='animate-text bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-bold'>Dream Job</span></h1>

                <p className='tracking-wider pb-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <Link><button className='btn lg:mt-10 mt-7'>Get Started</button></Link>
            </div>
            <div className="md:w-6/12  w-full md:-mt-12 lg:-mt-12">
                
                <Lottie 
          animationData={reader} loop={true}></Lottie>
                
            </div>
        </div>
{/* Job Category List part start*/}

        <div className="main_container  md:py-20 py-10 ">
            <div className="text-center">
            <h1 className="font-bold text-2xl md:text-4xl">Job Category List</h1> 
            <p className="my-5 text-gray-400 tracking-wider">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid lg:grid-cols-4  grid-cols-2 md:grid-cols-3  lg:gap-10 gap-5">
                {
                    jobcategory.slice(0,seeAll ? 9 :4).map((job,i)=><Jobcategory key={i} job={job}></Jobcategory>)
                }
            </div>
        </div>
{/* Feature Job part start */}
        <div className="main_container  md:py-12 py-10 ">
                <div className="text-center">
                    <h1 className="font-bold text-2xl md:text-4xl">Featured Jobs</h1>
                    <p className="my-5 text-gray-400 tracking-wider">Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className="grid py-5 md:grid-cols-2  lg:gap-10 gap-5">
                    {
                        jobData.slice(0,seeAll ? 9 :4).map(job=><FeaturedJob key={job.id} job={job}></FeaturedJob>)
                    }
                </div>
                {
                    !seeAll && <div className="mt-10 md:mt-16 text-center">
                    <button onClick={handleSeeAll} className="btn">See More</button>
                </div>
                }
        </div>
        </>
    );
};

export default Home;