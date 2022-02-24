import React, { useContext, useEffect, useState } from 'react';
import { context } from '../Context';
import CartItem from '../components/CartItem';

function Cart() {
  const { cartItems, removeItem } = useContext(context);
  const [orderText, setOrderText] = useState('Place Order');
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
  const totalCost = (cartItems.length * 5.99).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const placeOrder = () => {
    setOrderText('Ordering...');
    console.log('Order being placed...');
    setTimeout(() => {
      cartItems.map((item) => removeItem(item.id));
    }, 3000);
  };

  useEffect(() => {
    setOrderText('Place Order');
  }, [cartItems]);

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCost}</p>
      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={placeOrder}>{orderText}</button>
        </div>
      ) : (
        <p>You have no items in your cart.</p>
      )}
    </main>
  );
}

export default Cart;
