import React from 'react';
import './Planetas.css';

function Planetas() {
  return (
    <div className="planetas">
        <div className="planeta">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg" alt="Mercúrio" />
        <p>Mercúrio</p>
        </div>
        <div className="planeta">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg" alt="Vênus" />
        <p>Vênus</p>
        </div>
        <div className="planeta">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg" alt="Terra" />
        <p>Terra</p>
        </div>
        <div className="planeta">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg" alt="Marte" />
        <p>Marte</p>
        </div>
        <div className="planeta">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg" alt="Júpiter" />
        <p>Júpiter</p>
        </div>
        <div className="planeta">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg" alt="Saturno" />
        <p>Saturno</p>
        </div>
        <div className="planeta">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg" alt="Urano" />
        <p>Urano</p>
        </div>
        <div className="planeta">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg" alt="Netuno" />
        <p>Netuno</p>
        </div>
    </div>
  );
}
export default Planetas;