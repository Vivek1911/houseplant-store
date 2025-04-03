import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../redux/cartSlice';

const Cart = () => {
  const { items, totalQuantity, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Price: ${totalPrice}</p>

      {items.map(item => (
        <div key={item.id} className="cart-item">
          <img src={`/assets/${item.image}`} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
        </div>
      ))}

      <button>Coming Soon</button>
      <button onClick={() => window.location.href = '/products'}>Continue Shopping</button>
    </div>
  );
};

export default Cart;
