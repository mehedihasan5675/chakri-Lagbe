import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';
  const assignment=[
    {
      name: "Assignment-1",
      marks: 60
    },
    {
      name: "Assignment-2",
      marks: 60
    },
    {
      name: "Assignment-3",
      marks: 60
    },
    {
      name: "Assignment-4",
      marks: 60
    },
    {
      name: "Assignment-5",
      marks: 60
    },
    {
      name: "Assignment-6",
      marks: 60
    },
    {
      name: "Assignment-7",
      marks: 60
    },
    {
      name: "Assignment-8",
      marks: 60
    }
  ]
const Statistics = () => {
    return (
        <>
           <div className='bg-gray-100 relative md:py-6 py-2 lg:py-8'>
                <img className='lg:w-64 md:w-52 w-36 absolute left-0 bottom-0' src="Vector.png" alt="" />
                <img className='lg:w-64 md:w-52 w-36 absolute -top-16 right-0' src="Vector-1.png" alt="" />
                <h1 className='font-normal text-center lg:text-4xl md:text-2xl text-xl'>Statistics</h1>
                <h1 className='font-normal text-center lg:text-2xl md:text-lg text-base mt-1 tracking-wider'>My first 8 assignment result data</h1>
            </div>
            
                <div className='mx-auto flex justify-center'>
               
                <PieChart width={400} height={400}>
          <Pie
            dataKey="marks"
            isAnimationActive={true}
            data={assignment}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          />
          
          <Tooltip />
        </PieChart>
                </div>
            </> 
        
    );
};

export default Statistics;