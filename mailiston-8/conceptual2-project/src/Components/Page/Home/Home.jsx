import React from 'react';
import Banner from '../../Header/Banner/Banner';
import Phones from '../../Phones/Phones';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

  const phones = useLoaderData();







    return (
        <div>
            <h1>this is home</h1>
            <Banner></Banner>
            <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;