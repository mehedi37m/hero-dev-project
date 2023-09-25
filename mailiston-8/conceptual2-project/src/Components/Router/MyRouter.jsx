import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Page/Home/Home';
import Favorites from '../Page/Favorites/Favorites';
import Login from '../Page/Login/Login';
import ErrorPage from '../ErrorPage/ErrorPage';
import Phone from '../Phones/Phone/Phone';


const MyRouter = createBrowserRouter([
    {
       path: "/",
       element: <MainLayout></MainLayout>,
       errorElement:<ErrorPage></ErrorPage>,
       children:[
        {
            path: "/",
            element:<Home></Home>,
            loader: () => fetch('/phone.json')
        },
        {
            path: "/favorites",
            element: <Favorites></Favorites>,
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/phones/:id",
            element:<Phone></Phone>,
            loader: () => fetch('/phone.json'),
        }
       ]
    },
])

export default MyRouter;