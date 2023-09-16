import React, { useState } from 'react';
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
    const [isFavorite, setIsFavorite] = useState(false);

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
    
    const handleAddToFavorite = () => {
        setIsFavorite(!isFavorite);
    }

  return (
    <>
      <Item>
        <div>
          <Photo src={img} alt={{ make } && { model }} />
          <Heartbutton type="button" onClick={handleAddToFavorite}>
                 {isFavorite ? <img src={heartBlue} alt="heart" size={20}/> : <img src={heart} alt="heart" size={20}/> }
          </Heartbutton>
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
