import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const {name,website} = user;
    return (
        <div  className='border p-5'>
            <h1 className='text-3xl font-bold'>Name :{name} </h1>
            <p className='text-xl'>website :{website} </p>
        </div>
    );
};

export default UserDetails;