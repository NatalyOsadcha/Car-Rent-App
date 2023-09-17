import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import CarsList from '../components/CarsList/CarsList';
import Searchbar from '../components/Searchbar/Searchbar';
import LoadMoreButton from '../components/LoadMoreButton/LoadMoreButton';
import fetchCars from '../components/Api/getCars';

export default function Catalog() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const handleSearch = ({ searchCars }) => {
    // setSearchImage(searchImage);
    // setIsLoading(false);
    // setPage(1);
    // setHits([]);
    // setTotalHits(null);
  };

  const handleLoadMore = page => {
    setPage(page);
  };

  const hideButton = () => {};
  //   const query = searchParams.get('query');

  //  useEffect(() => {
  //     if (query === null || query === '') {
  //       return;
  //     }
  //     getMovieByKeyWord(query)
  //       .then(({ results }) => {
  //         if (results) {
  //           setMovies(results);
  //         }
  //       })
  //       .catch(error => {
  //         setError(error);
  //       });
  //   }, [query]);

  useEffect(() => {
    fetchCars(page)
      .then(data => {
        if (data) {
          setCars(data);
          console.log(data);
        }
      })
      .catch(error => {
        setError(error);
      });
  }, [page]);

  return (
    <>
      {/* <Searchbar onSubmit={handleSearch} /> */}
      <CarsList cars={cars} />
      <LoadMoreButton
        onClick={handleLoadMore}
        page={page}
        hideButton={hideButton}
      />
    </>
  );
}
