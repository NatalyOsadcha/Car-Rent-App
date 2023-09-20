import React, { useEffect, useState } from 'react';
import CarsList from '../components/CarsList/CarsList';
import Searchbar from '../components/Searchbar/Searchbar';
import LoadMoreButton from '../components/LoadMoreButton/LoadMoreButton';
import fetchCars from '../components/Api/getCars';

export default function Catalog() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCars()
      .then(data => {
        if (data) {
          setCars(data);
        }
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  const handleSearch = searchCars => {
    setCars(searchCars);
  };

  const handleReset = () => {
    fetchCars()
      .then(data => {
        if (data) {
          setCars(data);
        }
      })
      .catch(error => {
        setError(error);
        console.log(error);
      });
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const carsPerPage = 8;
  const start = (page - 1) * carsPerPage;
  const end = start + carsPerPage;
  const carsToDisplay = cars.slice(0, end);

  return (
    <>
      <Searchbar onSubmit={handleSearch} onReset={handleReset} cars={cars} />
      <CarsList cars={carsToDisplay} />
      {end < cars.length && (
        <LoadMoreButton onClick={handleLoadMore} page={page} />
      )}
    </>
  );
}
