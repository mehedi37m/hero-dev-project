import React, { useState } from 'react';
import Link from '../Link/Link';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';

const Navbar = () => {
 

    const [open, setOpen] = useState(false);
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '*', name: 'Not Found', id: 'not-found' }
      ];

    return (
        <div className='bg-red-800 text-white p-6'>
            <div onClick={()=> setOpen(!open)} className='md:hidden text-3xl '>
                {
                    open === true ? <AiOutlineCloseCircle></AiOutlineCloseCircle> : <AiOutlineMenu className=''></AiOutlineMenu>
                }
            
            </div>
           <div className={`md:flex absolute bg-red-800 duration-1000 md:static py-3 px-3 
           ${ open ? 'top-16' : '-top-60'}`}>
         
           {
                routes.map((route,idx) => <Link key={idx} route={route} ></Link> )
            }
           </div>
        </div>
    );
};

export default Navbar;