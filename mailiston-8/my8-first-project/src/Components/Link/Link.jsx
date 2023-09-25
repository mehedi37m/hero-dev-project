import React from 'react';

const Link = ({route}) => {
    return (
        <nav>
            <div className='mr-10'>
          <ul>
          <li className='gap-10'  ><a href={route.path}>{route.name} </a> </li>
          </ul>
            </div>
        </nav>
    );
};

export default Link;