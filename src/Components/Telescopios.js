import React from 'react';
import './../App.css';
import './Telescopios.css';

function Telescopios() {
  return (
    <div class="telescopios">
        <div class="telescopio">
        <h2>🔭 Telescópio Espacial Hubble</h2>
        <p>
            Lançado em 1990 pela NASA, o Hubble revolucionou a astronomia ao capturar imagens detalhadas do universo sem a interferência da atmosfera terrestre. Ele ajudou a determinar a idade do universo e observar galáxias distantes.
        </p>
        </div>

        <div class="telescopio">
        <h2>🛰️ Telescópio Espacial James Webb</h2>
        <p>
            Lançado em 2021, o James Webb é o sucessor do Hubble. Possui tecnologia infravermelha avançada, permitindo observar as primeiras galáxias formadas após o Big Bang e estudar atmosferas de exoplanetas.
        </p>
        </div>

        <div class="telescopio">
        <h2>🌌 Telescópio Espacial Chandra</h2>
        <p>
            Especializado em raios X, o Chandra foi lançado em 1999. Ele é fundamental para o estudo de buracos negros, supernovas e galáxias ativas, revelando fenômenos cósmicos invisíveis a outros telescópios.
        </p>
        </div>
  </div>
  );
}

export default Telescopios;