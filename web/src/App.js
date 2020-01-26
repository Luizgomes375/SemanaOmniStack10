import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Desestruturação

// componente chamado App, primeira letra do componente Maiuscula sempre
//UM COMPONENTE POR ARQUIVO
//Propriedade: informações que um componente Pai passa para um componente Filho(Lembrar do conseito 
//imutabilidade)

function App() {
  return (
    <div id="App">
      <aside>
        <strong> Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="tecnologias" required></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="">latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">longitude</label>
              <input name="longitude" id="longitude" required></input>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
        <main>
          <ul>
            <li className="dev-item">
              <header>
                <img src="#" alt=""/>
              <div className="user-info">
                <strong>Diego fernandes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
              </header>
              <p>sdaasdadasdasdasdasdasdasdasda</p>
              <a href="#">dasdasdasdas</a>
            </li>
          </ul>
        </main>
    </div>
  )
}   
    export default App;
