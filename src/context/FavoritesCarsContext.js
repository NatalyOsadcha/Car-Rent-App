import React, { createContext, useContext, useState } from 'react';

const FavoritesCarsContext = createContext();

export const useFavoritesCars = () => {
  return useContext(FavoritesCarsContext);
};

export const FavoritesCarsProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
const [carToFavorite, setCarToFavorite] = useState({});

const addToFavorites = (car) => {
    console.log('added to favorites');
    setFavorites([...favorites, car]);
    setCarToFavorite((prevState) => ({
      ...prevState,
      [car.id]: true,
    }));
};
  
  const removeFromFavorites = (carId) => {
    console.log('removed from favorites');
    const updatedFavorites = favorites.filter((car) => car.id !== carId);
    setFavorites(updatedFavorites);
    setCarToFavorite((prevState) => {
      const newState = { ...prevState };
      delete newState[carId]; 
      return newState;
    })
  }

  return (
    <FavoritesCarsContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
       carToFavorite
      }}
    >
      {children}
    </FavoritesCarsContext.Provider>
  );
};