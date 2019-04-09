import React, { Component } from 'react';

import Titulo from '../components/Titulo.js';
import Listar from '../components/Listagem.js';
import Paginacao from '../components/Paginacao.js';

class Filmes extends Component{
	state = {
      paginaAtual: '1'
    };

    mudarPagina = (pagina) => {
      this.setState({
        paginaAtual: pagina        
      });
    }

	render(){
		return(
			<section className="filmes">
				<div className="listagem">
		          <Titulo titulo={'Filmes'}/>
		          <Listar tipo={'filmes'} pagina={this.state.paginaAtual} {...this.props}/> 
		        </div> 
		        <div className="pagination">
		          <Paginacao onClickPagina={this.mudarPagina} paginaAtual={this.state.paginaAtual} tipo="filmes"/>
		        </div>
			</section>
		);
	}
}

export default Filmes;