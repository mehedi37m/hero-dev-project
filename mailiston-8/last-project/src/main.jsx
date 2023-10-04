import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import JobDetails from './components/JobDetails/JobDetails';
import Login from './components/Login/Login';
import AuthProvider from './firebase/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
      },
      {
        path: '/applied',
        element:<AppliedJobs></AppliedJobs>,
        loader: ()=> fetch('../jobs.json')

      },
      {
        path: '/job/:id',
        element:<JobDetails></JobDetails>,
        loader: ()=> fetch('../jobs.json')
      },
      {
        path: '/login',
        element:<Login></Login>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <AuthProvider>
 <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
  </AuthProvider>
)
