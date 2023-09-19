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


// Function to add an item to favorites
// const addToFavorites = (itemId) => {
//   const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//   favorites.push(itemId);
//   localStorage.setItem('favorites', JSON.stringify(favorites));
// };

// // Function to remove an item from favorites
// const removeFromFavorites = (itemId) => {
//   const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//   const updatedFavorites = favorites.filter((id) => id !== itemId);
//   localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
// };

// // Function to check if an item is in favorites
// const isFavorite = (itemId) => {
//   const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//   return favorites.includes(itemId);
// };

// // When rendering the list of items
// const renderItems = () => {
//   const items = /* your array of items */;
  
//   return items.map((item) => (
//     <div key={item.id}>
//       <h2>{item.name}</h2>
//       <button onClick={() => addToFavorites(item.id)} disabled={isFavorite(item.id)}>
//         {isFavorite(item.id) ? 'Favorited' : 'Add to Favorites'}
//       </button>
//     </div>
//   ));
// };

// // Render the list of items
// const App = () => (
//   <div>
//     {renderItems()}
//   </div>
// );

// export default App;
