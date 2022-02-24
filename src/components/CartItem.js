import React, { useContext, useState } from 'react';
import { context } from '../Context';

function CartItem({ item }) {
  const { removeItem } = useContext(context);
  const [hover, setHover] = useState('ri-delete-bin-line');

  return (
    <div className="cart-item">
      <i
        onMouseEnter={() => setHover('ri-delete-bin-fill')}
        onMouseLeave={() => setHover('ri-delete-bin-line')}
        className={hover}
        onClick={() => removeItem(item.id)}
      ></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
