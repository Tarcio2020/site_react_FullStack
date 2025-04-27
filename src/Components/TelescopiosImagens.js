import React from 'react';
import './../App.css';
import './TelescopiosImagens.css';
import './Telescopios.css';

function TelecopiosImagens() {
  return (
    <div className="galeria-telescopios">
        <div className="telescopio-img">
        <img src="https://cdn.esahubble.org/archives/images/wallpaper2/heic1501a.jpg" alt="Telescópio Chandra" />
        </div>  
        <div className="telescopio-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/HST-SM4.jpeg" alt="Telescópio Espacial Hubble" />
        </div>
        <div className="telescopio-img">
        <img src="https://servidor-estaticos-vercel.vercel.app/jamesweb.png" alt="Telescópio James Webb" />
        </div>
    </div>
  );
}

export default TelecopiosImagens;