import React from 'react';

const PriceOption = ({option}) => {
    const {name, price,features}= option;
    console.log(features)
    return (
        <div className='bg-green-200 p-6 rounded-xl flex flex-col'>
             <h2>
                <span className='text-6xl font-bold'>{price}</span>
                <span className='font-bold'>$/month</span>
             </h2>
             <h1 className='text-red-500 text-2xl mb-5 font-extrabold'>{name}</h1>

             <div className='font-semibold flex-grow'>
             {
                features.map(feature => <li>{feature}</li>)
             }
             </div>
             <div className=' mt-5 text-center '>
             <button className='btn bg-red-600  text-white '>BUY NOW</button>
             </div>
        </div>
    );
};

export default PriceOption;