import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../utilities/common.css';
const Header = () => {
    const [open,setOpen]=useState(false)
    return (
        <nav className='grid bg-gray-100 py-2  items-center grid-cols-3    main_container'>
            <div className=''><Link to="/"><h1 className=' cursor-pointer font-bold text-xl md:text-2xl tracking-wider text-indigo-800'><span className='text-indigo-600 text-left'>Chakri</span>Lagbe?</h1></Link></div>
            <div className={`absolute z-40 px-4 md:px-0 md:py-0 py-3 bg-gray-100 w-full opacity-90 duration-700 md:static ${open ? 'top-12 left-0':'top-12 -left-[800px]'}`}>
                <ul className='flex gap-2   md:justify-between font-normal  md:flex-row flex-col '>
                   <li><NavLink className={({isActive})=> isActive ? 'text-indigo-600 font-bold duration-200':''} to="/">Home</NavLink></li> 
                   <li><NavLink className={({isActive})=> isActive ? 'text-indigo-600 font-bold duration-200':''} to="/statistics">Statistics</NavLink></li> 
                   <li><NavLink className={({isActive})=> isActive ? 'text-indigo-600 font-bold duration-200':''} to="/applied-jobs">Applied Jobs</NavLink></li> 
                   <li><NavLink className={({isActive})=> isActive ? 'text-indigo-600 font-bold duration-200':''} to="/blog">Blog</NavLink></li> 
                </ul>
            </div>
            
            <div onClick= {()=>setOpen(!open)}  className='block md:hidden text-center mx-auto cursor-pointer'>
                {
                 open ? <div className='w-10 h-10'><XMarkIcon></XMarkIcon></div> : <div className='w-10 h-10'><Bars3Icon></Bars3Icon></div>  
                }
            </div>
            <div className='text-end'>
                <Link>
                <button className='bg-gradient-to-r from-indigo-400 text-sm md:text-lg  to-purple-500 px-3 md:px-4 py-2 md:py-3 text-white rounded-md font-medium tracking-wider'>Star Applying</button>
                </Link>
            </div>
        </nav>
    );
};

export default Header;