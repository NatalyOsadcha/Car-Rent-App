import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesCarsContext = createContext();

export const useFavoritesCars = () => {
  return useContext(FavoritesCarsContext);
};

export const FavoritesCarsProvider = ({ children }) => {

    const getCarsState = () => {
    const cars = localStorage.getItem('cars');
    return cars ? JSON.parse(cars) : [];
    }
  
  const getBlueHeartState = () => {
    const carWithBlueHeart = localStorage.getItem('carWithBlueHeart');
    return carWithBlueHeart ? JSON.parse(carWithBlueHeart) : {};
  }
  
  const [favorites, setFavorites] = useState(getCarsState); /// car to favorites ///
  const [carToFavorite, setCarToFavorite] = useState(getBlueHeartState); /// to change heart-icon color ///


  useEffect(() => {
    localStorage.setItem('cars', JSON.stringify(favorites));
    localStorage.setItem('carWithBlueHeart', JSON.stringify(carToFavorite));
  }, [favorites, carToFavorite]);

  const addToFavorites = car => {
    setFavorites([...favorites, car]);
    setCarToFavorite(prevState => ({
      ...prevState,
      [car.id]: true,
    }));
  };

  const removeFromFavorites = carId => {
    console.log('removed from favorites');
    const updatedFavorites = favorites.filter(car => car.id !== carId);
    setFavorites(updatedFavorites);
    setCarToFavorite(prevState => {
      const newState = { ...prevState };
      delete newState[carId];
      return newState;
    });
  };

  return (
    <FavoritesCarsContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        carToFavorite,
      }}
    >
      {children}
    </FavoritesCarsContext.Provider>
  );
};

