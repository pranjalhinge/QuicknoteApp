import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/home/home'; 
import Add from './views/add/add';
import Show from './views/show/show';
import { Toaster } from 'react-hot-toast';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path : "/add",
    element: <Add/>

  },
  {
    path : "/show",
    element: <Show/>
  }
]);

root.render(<div>
  
  <RouterProvider router={router}/>
  <Toaster/>
  </div>
);
