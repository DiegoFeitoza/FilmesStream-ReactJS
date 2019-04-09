import React, { Component } from 'react';
import {BrowserRouter as Router,
        Route,
        Link,
        NavLink} from 'react-router-dom';

import './App.css';
import Titulo from './components/Titulo.js';
import Listar from './components/Listagem.js';
import Paginacao from './components/Paginacao.js';

import Filmes from './pages/filmes.js';
import Series from './pages/series.js';
import Animes from './pages/animes.js';
import Home from './pages/home.js';

import Detalhe from './pages/detalhe.js';

class App extends Component { 
  
  render() { 
   return (
      <section>
          <Router>
            <div>
              <nav>
                <ul className="nav nav-tabs">
                  <li  className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/home">Home</NavLink>
                  </li>
                  <li  className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/filmes">Filmes</NavLink>
                  </li>
                  <li  className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/series">Series</NavLink>
                  </li>                  
                  <li  className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/animes">Animes</NavLink>
                  </li>
                </ul>
              </nav>

              <section className="container">
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/filmes" component={Filmes}/>
                <Route exact path="/series" component={Series}/>
                <Route exact path="/animes" component={Animes}/>

                <Route path={`/:type/detalhe/:imdb`} render={(props) => (
                  <Detalhe {...this.props} {...props} />
                  )} />
              </section>         

            </div>                
          </Router>
      </section>
    );
  }
}

export default App;
