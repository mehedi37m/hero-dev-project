import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qzone1 from '../assets/images/qZone1.png'
import qzone2 from '../assets/images/qZone2.png'
import qzone3 from '../assets/images/qZone3.png'

const RightSideNav = () => {
    return (
        <div>

            <div className='p-3 mb-6'>
                <h1 className='font-bold text-3xl mb-3'>Login With</h1>
                <button className="btn btn-outline w-full">
                 <FaGoogle></FaGoogle>
                  Google Login
              </button>
                <button className="btn btn-outline w-full my-3">
                 <FaGithub></FaGithub>
                Github
              </button>
            </div>

            <div className='p-3 mb-6'>
                <h1 className='font-bold text-3xl mb-3'>Find Us on </h1>
               <a className='flex gap-2 items-center text-xl border rounded-t-lg p-3' href=""> 
               <FaFacebook></FaFacebook>
               Facebook
               </a>
               <a className='flex gap-2 items-center text-xl border-x  p-3' href=""> 
               <FaTwitter></FaTwitter>
              Twitter
               </a>
               <a className='flex gap-2 items-center text-xl border rounded-b-lg p-3' href=""> 
               <FaInstagram></FaInstagram>
              Instagram
               </a>
            </div>

            <div className='p-3 mb-6'>
                <h1 className='font-bold text-3xl mb-3'>Q Zone</h1>
              <img src={qzone1} alt="" />
              <img src={qzone2} alt="" />
              <img src={qzone3} alt="" />
            </div>

        </div>
    );
};

export default RightSideNav;