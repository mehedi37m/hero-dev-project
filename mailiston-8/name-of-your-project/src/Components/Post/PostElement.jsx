import React from 'react';
import { Link, useNavigate, } from 'react-router-dom';

const PostElement = ({post}) => {
    const {id , title} = post;


const navigate = useNavigate();


const handleButtonClick = () => {
    navigate(`/post/${id}`) ;
}



    return (
        <div className=' rounded-xl mt-5 border p-5 bg-pink-600 text-white'>
             <h1>post of id :{id} </h1>
             <p>name :{title} </p>
             <Link to={`/post/${id}`} >show post</Link>
             <button onClick={handleButtonClick} className='ml-4 bg-red-800 p-3 rounded-lg '>button</button>
        </div>
    );
};

export default PostElement;