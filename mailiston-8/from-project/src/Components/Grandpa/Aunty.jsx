import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div>
            <h1>Aunty</h1>
            <div className='flex gap-3'>
                <Cousin name ={'mini'}></Cousin>
                <Cousin name ={'monni'}></Cousin>
            </div>
        </div>
    );
};

export default Aunty;