import React from 'react';

import Planetas from './Planetas';
import LeisDeKepler from './LeisDeKepler';
import LeisDeKeplerImagem from './LeisDeKeplerImagens';
import Telescopio from './Telescopios';
import TelescopioImagem from './TelescopiosImagens';
import DivImagensOne from './DivImagensOne';
import TextoBuraco from './TextoBuracoNegro';
import ImagensInicio from './ImagensInicio';
import Galaxia from './Galaxia';

function Blog() {
  return (
    <div className="App">
            <h1>Blog de Astrofísica</h1>
            <h1>Bem-vindo ao nosso blog!</h1>   
            <p>Explore o fascinante mundo da astrofísica, onde estudamos os fenômenos cósmicos e as leis que regem o universo.</p>  
            <p>Descubra as maravilhas do cosmos e como os cientistas desvendam os mistérios do espaço.</p>
        
      <ImagensInicio />
      <Galaxia />
      <Planetas />
      <LeisDeKepler />
      <LeisDeKeplerImagem />
      <Telescopio />
      <TelescopioImagem />
      <TextoBuraco />
      <DivImagensOne />
    </div>
  );
}

export default Blog;
