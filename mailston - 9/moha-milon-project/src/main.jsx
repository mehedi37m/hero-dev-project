import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './provider/AuthProvider';
import Orders from './Components/Ordres/Orders';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Profile from './Components/Profile/Profile';
import Dashboard from './Components/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/register",
        element:<Register></Register>
      },
      {
        path: "/orders",
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: "/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "/dashboard",
        element:<Dashboard></Dashboard>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
