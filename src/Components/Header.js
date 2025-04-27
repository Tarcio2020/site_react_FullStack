import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="menu">
      <div>
        <Link to="/blog">Blog</Link>
        <Link to="/sobre-nos">Sobre</Link>
        <Link to="/formulario">Formulário</Link>
        <Link to="/comentarios">Comentários</Link>
      </div>
    </div>
  );
}

export default Header;
