import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MyRouter from './Components/Router/MyRouter.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   

           <RouterProvider router={MyRouter} />

 

  </React.StrictMode>,
)
