import './../App.css';
import React from 'react';
import './TextoBuracoNegro.css';

function TextoBuracoNegro() {
    return (
        <div className="texto-buraco">
            <div className="container">
                <h2>O que são Buracos Negros?</h2>
                <p>Buracos negros são <strong>regiões do espaço onde a gravidade é tão intensa que nada consegue escapar</strong>, 
                nem mesmo a luz. Eles se formam geralmente quando uma estrela muito massiva colapsa após esgotar seu combustível — ela 
                entra em colapso gravitacional, ficando tão densa que cria esse “buraco” no tecido do espaço-tempo.
                </p>

                <p>Eles não são "buracos" no sentido literal — são objetos supermassivos com efeitos extremos. 
                Fascinantes e ainda cheios de mistérios!
                </p>
            </div>
        </div>
    );
}
export default TextoBuracoNegro;