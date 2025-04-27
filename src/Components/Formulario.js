import React from 'react';
import './Formulario.css';

function Formulario() {
  return (
    <div className="formulario-container">
      <h1>Inscreva-se na nossa Newsletter</h1>
      <form action="#" method="post">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu email"
          required
        />
        <button type="submit">Inscrever-se</button>
      </form>
    </div>
  );
}

export default Formulario;