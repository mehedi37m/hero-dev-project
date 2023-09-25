import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostElement from './PostElement';

const Post = () => {
    const posts = useLoaderData();
    console.log(posts)

    return (
        <div>
            <h1>nice</h1>
            <div className='grid grid-cols-3 gap-4  '>
                {
                    posts.map(post => 
                    <PostElement key={post.id} post={post}></PostElement>)
                }
            </div>
        </div>
    );
};

export default Post;