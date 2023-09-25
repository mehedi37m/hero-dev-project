import React, { useEffect, useState } from 'react';
import FavoritesCard from './FavoritesCard';

const Favorites = () => {

const [favorites, setFavorites] = useState([]);
const [noFound, setNoFound] = useState(false);

useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

    if(favoriteItems){
        setFavorites(favoriteItems);
    }else{
        setNoFound("no data found")
    }
},[]);




    return (
        <div>
            Favorites Page

            <div>
                {
                    favorites.map(phone=> (<FavoritesCard key={phone.id} phone={phone}></FavoritesCard> ))
                }
            </div>
        </div>
    );
};

export default Favorites;