import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import reader from '../../assets/binoculars.json';
import '../../utilities/common.css';

import React, { useEffect, useState } from 'react';
import Jobcategory from "../Jobcategory/Jobcategory";

const Home = () => {
    const [jobcategory,setJobcategory]=useState([])
    useEffect(()=>{
        fetch('jobcategory.json')
        .then(res=>res.json())
        .then(data=>{
           const categorydata= data.slice(0,4)
           setJobcategory(categorydata);
        })
    },[])
    return (
        <>
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


        <div className="main_container  md:py-20 py-10 ">
            <div className="text-center">
            <h1 className="font-bold text-2xl md:text-4xl">Job Category List</h1>
            <p className="my-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid lg:grid-cols-4 lg:px-16 grid-cols-2 md:grid-cols-3  gap-5">
                {
                    jobcategory.map((job,i)=><Jobcategory key={i} job={job}></Jobcategory>)
                }
            </div>
        </div>
        </>
    );
};

export default Home;