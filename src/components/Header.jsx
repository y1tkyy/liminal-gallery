import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.webp";

const Header = () => {
  return (
    <header className="header content-container">
      <div className="header__logo-container">
        <img src={logo} alt="Logo" className="header__logo" />
        <h1 className="header__title">Liminal</h1>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li>
            <Link to="/">Головна</Link>
          </li>
          <li>
            <Link to="/gallery">Галерея</Link>
          </li>
          <li>
            <Link to="/videos">Відео</Link>
          </li>
          <li>
            <Link to="/carousel">Слайдер</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
