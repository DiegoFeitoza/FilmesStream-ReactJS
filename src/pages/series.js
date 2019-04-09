import React, { Component } from 'react';

import Titulo from '../components/Titulo.js';
import Listar from '../components/Listagem.js';
import Paginacao from '../components/Paginacao.js';

class Series extends Component{
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
			<section className="series">
				<div className="listagem">
		          <Titulo titulo={'Séries'}/>
		          <Listar tipo={'series'} pagina={this.state.paginaAtual}  {...this.props}/> 
		        </div> 
		        <div className="pagination">
		          <Paginacao onClickPagina={this.mudarPagina} paginaAtual={this.state.paginaAtual} tipo="series"/>
		        </div>
			</section>
		);
	}
}

export default Series;