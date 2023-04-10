import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import reader from '../../assets/binoculars.json';
import '../../utilities/common.css';

import React from 'react';

const Home = () => {
    return (
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
    );
};

export default Home;