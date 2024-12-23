import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));

    // Exibe o feedback
    setShowFeedback(true);

    // Remove o feedback após 3 segundos
    setTimeout(() => setShowFeedback(false), 3000);
  };

  return (
    <article className="product-card">
      <img src={product.imageUrl} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <span className="product-price">R$ {product.price.toFixed(2)}</span>
      <button onClick={handleAddToCart} className="click-button">Adicionar ao Carrinho</button>
      {showFeedback && <div className="feedback">Produto adicionado ao carrinho!</div>}
    </article>
  );
};

export default ProductCard;
