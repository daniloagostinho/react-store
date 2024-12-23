import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';

const Cart = () => {
  // Busca os itens do carrinho no estado do Redux
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
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.title} className="product-image" />
              <h3>{item.title}</h3>
              <span>R$ {item.price.toFixed(2)}</span>
              <span>Quantidade: {item.quantity}</span>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remover</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
