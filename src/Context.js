import React, { createContext, useEffect, useState } from 'react';

const context = createContext();
const { Provider } = context;

const Context = (props) => {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
    )
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.log(error));
  }, []);

  const toggleFavorite = (id) => {
    const updatedArr = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavourite,
        };
      }
      return photo;
    });
    setPhotos(updatedArr);
  };

  const addCartItems = (img) => {
    const items = [...cartItems];
    if (!items.includes(img)) items.push(img);
    setCartItems(items);
  };

  const removeItem = (id) => {
    setCartItems(prevItem => prevItem.filter(item => item.id !== id))
  };

  return (
    <Provider
      value={{ photos, cartItems, removeItem, addCartItems, toggleFavorite }}
    >
      {props.children}
    </Provider>
  );
};

export { context, Context };
