import React from 'react';
import { Outlet, useNavigation } from "react-router-dom";
import Header from '../Header/Header';

const Home = () => {
    const navigation  = useNavigation();

    return (
        <div>
            <Header></Header>
            <h1>this is home </h1>
            {
                navigation.state === "loading" ? 
                <p className='text-5xl font-extrabold'>Looding...</p> :
                <Outlet></Outlet>
            }
           
        </div>
    );
};

export default Home;