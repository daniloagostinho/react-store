import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const cartCount = useSelector((state) => state.cart.items.reduce((total, item) => total + item.quantity, 0));

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="/logo.png" alt="Full Stack" />
          <span>EFull Stack</span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Buscar produtos, marcas e muito mais..." />
          <button>Buscar</button>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/cart">
                Carrinho <span className="cart-count">{cartCount}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
