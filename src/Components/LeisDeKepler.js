import React from 'react';
import './LeisDeKepler.css';

function LeisDeKepler() {
    return (
        <div className="inicio">
            <h1>Leis de Kepler</h1>
            <p>As Leis de Kepler são três princípios fundamentais que descrevem o movimento dos planetas em torno do Sol. Elas foram formuladas pelo astrônomo Johannes Kepler no início do século XVII e são essenciais para a compreensão da mecânica celeste.</p>
            <h2>Primeira Lei de Kepler: Lei das Órbitas Elípticas</h2>
            <p>A primeira lei afirma que os planetas se movem em órbitas elípticas, com o Sol localizado em um dos focos da elipse. Isso significa que a distância entre um planeta e o Sol varia ao longo de sua órbita.</p>
            <h2>Segunda Lei de Kepler: Lei das Áreas</h2>
            <p>A segunda lei estabelece que uma linha imaginária que conecta um planeta ao Sol varre áreas iguais em intervalos de tempo iguais. Isso implica que os planetas se movem mais rapidamente quando estão mais próximos do Sol e mais lentamente quando estão mais distantes.</p>
            <h2>Terceira Lei de Kepler: Lei dos Períodos</h2>
            <p>A terceira lei relaciona o período orbital de um planeta (o tempo que leva para completar uma volta ao redor do Sol) com a distância média do planeta ao Sol. Ela afirma que o quadrado do período orbital é proporcional ao cubo da distância média do planeta ao Sol.</p>
        </div>
    );
}
export default LeisDeKepler;
