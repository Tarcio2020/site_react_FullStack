import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import SobreNos from './Components/SobreNos';
import Formulario from './Components/Formulario';
import Comentarios from './Components/Comentarios';
import Blog from './Components/Blog';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/comentarios" element={<Comentarios />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

