import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

 const error = useRouteError();

const navigate = useNavigate();


 const handleHomePage = () => {
     navigate(`/`)
 }

    return (
        <div>
            <h1>oops!!</h1>
            <p>{error.statusText || error.message} </p>
            {
                error.status === 404 && <div>
                    <h1>page not found</h1>
                    <p>PLZ go back</p>
                    <button onClick={handleHomePage} className=' bg-red-800 p-3 rounded-lg text-white'>Home</button>
                </div>
            }
        </div>
    );
};

export default ErrorPage;