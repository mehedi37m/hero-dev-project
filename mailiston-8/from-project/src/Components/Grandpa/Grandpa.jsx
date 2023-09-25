import React, { createContext } from 'react';
import Uncle from './Uncle';
import Aunty from './Aunty';
import Dad from './dad';


export const AssetContext = createContext('gold');

const Grandpa = () => {







    return (
        <div className='border m-10 p-10 rounded-xl '>

            
           <div className='flex items-center justify-center'>

              <AssetContext.Provider value='gold'>
              <div className='border m-10 p-10 rounded-xl '>
                <Dad></Dad>
                </div>
                <div className='border m-10 p-10 rounded-xl '>
                <Uncle></Uncle>
                </div>
                <div className='border m-10 p-10 rounded-xl '>
                <Aunty></Aunty>
                </div>
              </AssetContext.Provider>

           </div>
            
        </div>
    );
};

export default Grandpa;