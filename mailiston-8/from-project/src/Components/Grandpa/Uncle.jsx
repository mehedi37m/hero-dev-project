import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div>
            <h1>Uncle</h1>
            <div className='flex gap-3'>
                <Cousin name= {'rafsan'}></Cousin>
                <Cousin name= {'rohim'}></Cousin>
            </div>
        </div>
    );
};

export default Uncle;