import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFavoritesCars } from 'context/FavoritesCarsContext';

import CarsList from '../components/CarsList/CarsList';
import Searchbar from '../components/Searchbar/Searchbar';
import LoadMoreButton from '../components/LoadMoreButton/LoadMoreButton';

export default function Favorites() {
 const { favorites} = useFavoritesCars();
    
    return (
        <>
               {/* <Searchbar onSubmit={handleSearch} /> */}
      <CarsList cars={favorites} />
        </>
    )
}