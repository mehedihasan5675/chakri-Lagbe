import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Applied from './components/Appliedjobs/Applied';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Jobdetails from './components/Jobdetails/Jobdetails';
import Statistics from './components/Statistics/Statistics';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch(`data.json`)
    },
    {
      path:"job-details",
      element:<Jobdetails></Jobdetails>,
      loader:()=>fetch(`data.json`)
    },
    {
      path:"statistics",
      element:<Statistics></Statistics>
  },
  {
    path:"applied-jobs",
    element:<Applied></Applied>,
    loader:()=>fetch(`data.json`)
},
{
  path:"blog",
  element:<Blog></Blog>
}

  ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
