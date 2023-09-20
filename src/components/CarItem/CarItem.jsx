import React, { useState } from 'react';
import { useFavoritesCars } from 'context/FavoritesCarsContext';
import heart from '../img/heart.svg';
import heartBlue from '../img/heartBlue.svg';
import CarModal from '../CarModal/CarModal';
import {
  Item,
  Photo,
  ModelWrapper,
  Title,
  Span,
  Price,
  Text,
  Button,
  Heartbutton,
} from './CarItem.styled';

export default function CarItem({ car }) {
  const [showModal, setShowModal] = useState(false);

  const { carToFavorite, addToFavorites, removeFromFavorites } =
    useFavoritesCars();

  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    accessories,
  } = car;
  const location = address.split(',');

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const isFavorite = carToFavorite[id] || false;

  return (
    <>
      <Item>
        <div>
          <Photo src={img} alt={{ make } && { model }} />

          {isFavorite ? (
            <Heartbutton type="button" onClick={() => removeFromFavorites(id)}>
              <img src={heartBlue} alt="heart" size={20} />{' '}
            </Heartbutton>
          ) : (
            <Heartbutton type="button" onClick={() => addToFavorites(car)}>
              <img src={heart} alt="heart" size={20} />{' '}
            </Heartbutton>
          )}

          <ModelWrapper>
            <Title>
              {make} <Span>{model}</Span>, {year}
            </Title>
            <Price>{rentalPrice}</Price>
          </ModelWrapper>
          <Text>
            {location[1]} | {location[2]} | {rentalCompany} | {type} | {make}|{' '}
            {id} | {accessories[0]}
          </Text>
        </div>
        <Button type="button" onClick={toggleModal}>
          Learn more
        </Button>
      </Item>
      {showModal && <CarModal toggleModal={toggleModal} car={car} />}
    </>
  );
}
