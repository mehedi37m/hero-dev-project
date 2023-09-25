import React from 'react';
import { Link } from 'react-router-dom';

const PhonesCard = ({phone}) => {
 
    const {id, phone_name, price, image, brand_name}= phone || {};

    return (
        <div>



<div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={image} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {brand_name}
          </p>
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {phone_name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              ${price}
            </p>
          </div>
         
        </div>
        <div className="p-6 pt-0">
          <Link to={`/phones/${id}`} state={phone_name}>
            <button
              className="block bg-gray-300 w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              See Details
            </button>
          </Link>
        </div>
      </div>
















            {/* <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div class="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img className='h-full w-full' src={image} alt="" />
  </div>
  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {phone_name}
    </h5>
   <p>price :{price} </p>
  </div>
  <div class="p-6 pt-0">
  <Link to={"/phone/id"}> <button className='p-3 bg-slate-400 rounded-lg'>  See details</button></Link>
  </div>
</div> */}
        </div>
    );
};

export default PhonesCard;