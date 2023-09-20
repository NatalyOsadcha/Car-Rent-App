import React from 'react';
import { useFavoritesCars } from 'context/FavoritesCarsContext';
import Container from '../components/Container/Container';
import CarsList from '../components/CarsList/CarsList';

export default function Favorites() {
  const { favorites } = useFavoritesCars();

  return (
    <Container>
      <CarsList cars={favorites} />
    </Container>
  );
}
