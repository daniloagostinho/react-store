import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart">
      <h1>Meu Carrinho</h1>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.imageUrl} alt={item.title} />
              <div>
                <h2>{item.title}</h2>
                <p>Quantidade: {item.quantity}</p>
                <p>Preço: R$ {(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
