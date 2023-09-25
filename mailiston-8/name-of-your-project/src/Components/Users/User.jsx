import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, email, phone} = user;
    return (
        <div>
            <div className=' border p-5'>
              <h1>{name}</h1>
              <p>{email} </p>
              <p>{phone} </p>
             <Link to={`/user/${id}`} >Show details</Link>
             <Link to={`/user/${id}`} >
                <button className='bg-pink-600 p-2 rounded-lg ml-3'>Click me</button>
             </Link>
            </div>
        </div>
    );
};

export default User;