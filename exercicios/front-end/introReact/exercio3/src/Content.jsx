import React, { Component } from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];
export default class Content extends Component {
  render() {
    return (
      <ul className="Content-ul">
        {conteudos.map((element, index) => {
          return( <div className = 'Content-card' key={index}>
              <li>
                  <h2 className="Content-title">Conteúdo:</h2>
                  <p className="Content-p">O conteúdo é: {element.conteudo}</p>
                  <p className="Content-p">Status: {element.status}</p>
                  <p className="Content-p">Bloco: {element.bloco}</p>
              </li>
              </div>                        
          )       
  })} 
      </ul>
     
    )    
  }
}


