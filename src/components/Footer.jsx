import React from "react";
import logo from "../assets/icons/logo.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img src={logo} alt="Logo" className="footer__logo" />
        <p>&copy; 2024 Галерея Liminal. Всі права захищені.</p>
      </div>
    </footer>
  );
};

export default Footer;
