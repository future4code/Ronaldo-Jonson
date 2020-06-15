import React from 'react';

export function Pagina_1() {
    return (
      <div>
        <b><h2>Pagina 1 - Dados Gerais</h2></b>
        <div>
            <ol>
                <div>
                    <li> Qual o seu nome? </li>
                    <input type="text"></input>
                </div>
                <div>
                    <li> Qual sua idade? </li>
                    <input type="text"></input>
                </div>
                <div>
                    <li> Pergunta </li>
                    <input type="text"></input>
                </div>
                <div>
                    <li> Qual seu email? </li>
                    <input type="text"></input>
                </div>
                <div>
                    <li> Qual sua escolaridade? </li>
                    <select id="cars">
                        <option value="medio-incom">Ensino Medio Incompleto</option>
                        <option value="medio-com">Ensino Medio completo</option>
                        <option value="sup-incom">Ensino Superior Incompleto</option>
                        <option value="sup-com">Ensino Superior completo</option>
                    </select>
                </div>
            </ol>
        </div>
      </div>
    );
}

