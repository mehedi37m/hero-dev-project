import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id,title,body} = post;

 const navigate = useNavigate();


   const handleBackButton =( ) => {
      navigate(-1)
   }



    return (
        <div>
            <h1>postDetails : {id}</h1>
            <p className='text-2xl font-semibold mb-5'>{title}</p>
            <p>{body}</p>
            <button onClick={handleBackButton} className=' bg-red-800 p-3 rounded-lg text-white'>Go back</button>
        </div>
    );
};

export default PostDetails;