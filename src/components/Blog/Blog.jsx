import React from 'react';

const Blog = () => {
    return (
        <>
            <div className='bg-gray-100 relative md:py-6 py-2 lg:py-8'>
                <img className='lg:w-64 md:w-52 w-36 absolute left-0 bottom-0' src="Vector.png" alt="" />
                <img className='lg:w-64 md:w-52 w-36 absolute -top-16 right-0' src="Vector-1.png" alt="" />
                <h1 className='font-normal text-center lg:text-4xl md:text-2xl text-xl'>Blog</h1>
                <h1 className='font-normal text-center lg:text-2xl md:text-lg text-base mt-1 tracking-wider'>Question & Answer</h1>
            </div>
            <div className='w-full lg:w-6/12 mx-auto my-10 md:px-10 px-5'>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        1.When should you use Context API?
                    </div>
                    <div className="collapse-content">
                        <p>Context API is a feature of the JavaScript library called React, Context API are typically used when a React application needs to share data or state between different components without using props drill.It can be used independently at many times but by props drilling,it has so much lucking to pass data from one componet to another.It is a centralized state management process, managed by a single parent component. Sub-components can access this state and update the state in a centralized way. </p>
                    </div>
                </div>


                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 my-5 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        2.What is Custom Hook and How does it work?
                    </div>
                    <div className="collapse-content">
                        <p>Hooks are reusable functions. When we have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.Custom hooks can be used just like any other React hook, such as useState or useEffect, and can be invoked inside functional components. They can return values, state, or functions that can be used in the component's render or other methods.

By using custom hooks, we can abstract complex logic into reusable functions, promote code reusability, and make our React components more maintainable and scalable.</p>
                    </div>
                </div>



                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        3.What is useRef?
                    </div>
                    <div className="collapse-content">
                        <p>useRef is a feature of React that allows  to create a special type of variable that can store data that our component can't re-render when it changes. This is often used for things like directly accessing and modifying DOM elements, or storing values when we don't want to trigger re-renders.It does not trigger a re-render when the current value is updated.  It's like having a special container that holds data without affecting how our component looks or behaves.</p>
                    </div>
                </div>




                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 my-5 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                    4.What is useMemo?
                    </div>
                    <div className="collapse-content">
                        <p>useMemo is a hook in React that is used to memoize the result of a computation and only update it when the dependencies change. It helps to optimize performance by avoiding unnecessary re-computations of expensive operations. This can be helpful when we have expensive calculations or operations in our component that are not required to be recalculated on every render, but only when certain dependencies change.</p>
                    </div>
                </div>

                
            </div>
        </>
    );
};

export default Blog;