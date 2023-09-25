import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../layouts/MainLayOut';
import Home from '../Components/Home/Home';
import Products from '../Components/Products/Products';

const router = createBrowserRouter([
    {
      path: "/",
     element: <MainLayOut></MainLayOut>,
  
      children:[
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/products",
          element: <Products></Products>,
          loader:() => fetch(`https://dummyjson.com/products`)
        },
        {
          path: "/products/:id",
          element: <Products></Products>,
          loader:({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
        },
        {
          path: "/about",
          element: <about></about>,
        },
        {
          path: "/dashboard",
          element: <div>hello</div>,
        },
      ]
    },
    
    
  ]);

export default router;