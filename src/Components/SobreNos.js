import React from 'react';
import './SobreNos.css'; 

function SobreNos() {
  return (
    <div className="sobre-nos">
      <header>
        <h1>Sobre Nós</h1>
      </header>

      <section className="introducao">
        <p>Bem-vindo à nossa página! Aqui você encontra informações sobre nossa missão, visão e valores.</p>
        <p>Nosso objetivo é compartilhar conhecimento sobre telescópios e o universo.</p>
      </section>

      <section className="imagem-universo">
        <h2>A paixão pelo universo</h2>
        <img 
          src="https://img.freepik.com/fotos-premium/planetas-e-nuvens-de-poeira-estelar-imagem-do-espaco-profundo-fantasia-de-ficcao-cientifica-em-alta-resolucao-ideal-para-papel-de-parede-e-impressao-elementos-desta-imagem-fornecidos-pela-nasa_112293-1227.jpg" 
          alt="Imagem de Telescópio" 
          className="imagem-universo" 
        />
        <p>Explorar o espaço é uma das maiores aventuras da humanidade, e queremos compartilhar essa paixão com você!</p>
      </section>

      <section className="nossa-missao">
        <h2>Nossa Missão</h2>
        <p>Oferecer conteúdos educativos e atualizados sobre o mundo dos telescópios e da astronomia, ajudando a expandir o conhecimento dos nossos leitores sobre o universo e a ciência que o cerca.</p>
      </section>

      <section className="valores">
        <h2>Valores</h2>
        <ul>
          <li>Educação e aprendizado contínuo</li>
          <li>Paixão pela ciência e astronomia</li>
          <li>Compromisso com a veracidade da informação</li>
        </ul>
      </section>

      <section className="imagem-espaco">
        <h2>O que vemos além da Terra</h2>
        <img 
          src="https://th.bing.com/th/id/R.d3073f0b6d92e27a052569a5342aca7a?rik=nJuc6bdmtndo3w&pid=ImgRaw&r=0" 
          alt="Imagem do universo" 
          className="imagem-espaco"
        />
        <p>O universo está cheio de maravilhas e mistérios, e nosso trabalho é explorar e compartilhar cada descoberta com você.</p>
      </section>

  
    </div>
  );
}

export default SobreNos;
