import React from 'react';
import {createBrowserRouter,} from "react-router";
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            index:true,
            Component:Home,
        },
       
    ]
  },
]);

export default router;