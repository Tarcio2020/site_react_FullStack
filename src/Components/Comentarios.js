import React, { useState } from 'react';
import './Comentarios.css';

function Comentarios() {
  // Estado para armazenar os comentários
  const [comentarios, setComentarios] = useState([
    {
      id: 1,
      nome: 'João',
      comentario: 'Adorei o conteúdo sobre telescópios! Muito informativo!',
      foto: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: 2,
      nome: 'Maria',
      comentario: 'Muito legal! Sempre quis saber mais sobre o universo.',
      foto: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: 3,
      nome: 'Carlos',
      comentario: 'Achei o artigo bem interessante, vou compartilhar com meus amigos.',
      foto: 'https://randomuser.me/api/portraits/men/2.jpg'
    }
  ]);

  // Estado para armazenar os valores do formulário
  const [novoComentario, setNovoComentario] = useState('');
  const [novaFoto, setNovaFoto] = useState('');

  // Função para enviar o novo comentário
  const enviarComentario = (e) => {
    e.preventDefault();

    if (novoComentario && novaFoto) {
      const novoComentarioObj = {
        id: comentarios.length + 1,
        nome: 'Usuário', // Simulação de nome
        comentario: novoComentario,
        foto: novaFoto
      };
      
      setComentarios([...comentarios, novoComentarioObj]);
      setNovoComentario('');
      setNovaFoto('');
    }
  };

  return (
    <div className="comentarios-container">
      <h2>Comentários</h2>

      {/* Formulário para adicionar comentário */}
      <form onSubmit={enviarComentario} className="comentario-form">
        <div>
          <input
            type="text"
            placeholder="Digite seu comentário"
            value={novoComentario}
            onChange={(e) => setNovoComentario(e.target.value)}
            className="comentario-input"
          />
        </div>
        <div>
          <input
            type="url"
            placeholder="URL da foto"
            value={novaFoto}
            onChange={(e) => setNovaFoto(e.target.value)}
            className="foto-input"
          />
        </div>
        <button type="submit" className="submit-btn">Enviar Comentário</button>
      </form>

      {/* Lista de comentários fictícios */}
      <div className="comentarios-lista">
        {comentarios.map((comentario) => (
          <div key={comentario.id} className="comentario">
            <img src={comentario.foto} alt={comentario.nome} className="comentario-foto" />
            <div className="comentario-texto">
              <p className="comentario-nome">{comentario.nome}</p>
              <p>{comentario.comentario}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comentarios;
