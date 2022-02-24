import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { context } from '../Context';

const cartIcon = ({ cartItems, img, removeItem, addCartItems }) => {
  const alreadyInCart = cartItems.some((item) => item.id === img.id);
  if (alreadyInCart) {
    return (
      <i
        className="ri-shopping-cart-fill cart"
        onClick={() => removeItem(img.id)}
      ></i>
    );
  } else {
    return (
      <i
        className="ri-add-circle-line cart"
        onClick={() => addCartItems(img)}
      ></i>
    );
  }
};

const heartStyle = (isFavorite) =>
  isFavorite ? 'ri-heart-fill favorite' : 'ri-heart-line favorite';

function Image(props) {
  const { className, img } = props;
  const { addCartItems, cartItems, removeItem, toggleFavorite } =
    useContext(context);

  
  const heartIcon = (
    <i
      className={heartStyle(img.isFavorite)}
      onClick={() => toggleFavorite(img.id)}
    ></i>
  );

  return (
    <div className={`${className} image-container`}>
      <img src={img.url} className="image-grid" alt="suck it" />
      {heartIcon}
      {cartIcon({
        cartItems,
        img,
        removeItem,
        addCartItems,
      })}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
