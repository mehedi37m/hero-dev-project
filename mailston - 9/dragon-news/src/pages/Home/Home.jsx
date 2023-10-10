import React from 'react';
import Header from '../../Shared/Header';
import Navbar from '../../Shared/Navbar';
import LeftSideNav from '../../Shared/LeftSideNav';
import RightSideNav from '../../Shared/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';

import NewsCard from '../NewsCard/NewsCard';

const Home = () => {

const allNews = useLoaderData();



    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h1>this is home</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                <div className=''>
                    <LeftSideNav></LeftSideNav>
                </div>


                <div className='md:col-span-2 '>
                   {
                    allNews.map(news => <NewsCard key={news._id}
                    news={news}></NewsCard>)
                   }
                </div>



                <div className=''>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;