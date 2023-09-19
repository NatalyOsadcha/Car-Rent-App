import React from 'react';
import { useFavoritesCars } from 'context/FavoritesCarsContext';

import CarsList from '../components/CarsList/CarsList';
// import Searchbar from '../components/Searchbar/Searchbar';
// import LoadMoreButton from '../components/LoadMoreButton/LoadMoreButton';

export default function Favorites() {
  const { favorites } = useFavoritesCars();

  return (
    <>
      {/* <Searchbar onSubmit={handleSearch} cars={favorites}/> */}
      <CarsList cars={favorites} />
    </>
  );
}
