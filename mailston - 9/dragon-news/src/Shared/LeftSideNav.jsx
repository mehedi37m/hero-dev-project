import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LeftSideNav = () => {


const [categories, setCategories] = useState([]);

useEffect(() => {
    fetch("categories.json")
    .then(res => res.json())
    .then(data => setCategories(data)) 
},[])

    return (
        <div>
            <h1>left side : {categories.length}</h1>

            <div className='space-y-5'>
                {
                    categories.map(category =><NavLink key={category.id}
                    className='block ml-5 font-bold text-2xl '
                    to={`/category/${category.id}`}
                    >
                    {category.name}
                    
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;