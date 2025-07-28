import React from 'react';
import {createBrowserRouter,} from "react-router";
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import PopularProducts from '../Component/PopularProducts';
import LatestBlog from '../Component/LatestBlog';
import CustomerTestimonial from '../Component/CustomerTestimonial';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
          path:'shop',
          element:<PopularProducts></PopularProducts>
        },
        {
          path:'product',
          element:<PopularProducts></PopularProducts>,
        },
        {
          path:'blog',
          element:<LatestBlog></LatestBlog>,
        },
        {
          path:'contact',
          element:<CustomerTestimonial></CustomerTestimonial>
        }
       
    ]
  },
]);

export default router;