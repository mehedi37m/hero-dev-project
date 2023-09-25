import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <nav className='flex gap-4 text-blue-500 active:after:underline'>


                <NavLink  to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Post</NavLink>
            </nav>
        </div>
    );
};

export default Header;