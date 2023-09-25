import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div>
             <section className='flex justify-between px-10 my-10 bg-slate-400'>
      <div>Phone bazar</div>
   <nav>
    <ul className='flex gap-5'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
    </ul>
   </nav>



        
    </section>
    <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;