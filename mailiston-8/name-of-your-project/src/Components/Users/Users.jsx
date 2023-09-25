import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './user';

const Users = () => {
    const users = useLoaderData();

    return (
        <div>
            <h1>users: {users.length}</h1>
            <h2>Our users</h2>
            <div className='gird grid-cols-3'>
                {
                    users.map((user) =><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;