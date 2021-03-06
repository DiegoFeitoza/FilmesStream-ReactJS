import React, { Component } from 'react';

import Titulo from '../components/Titulo.js';
import Listar from '../components/Listagem.js';
import Paginacao from '../components/Paginacao.js';

class Animes extends Component{
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
			<section className="animes">
				<div className="listagem">
		          <Titulo titulo={'Animes'}/>
		          <Listar tipo={'animes'} pagina={this.state.paginaAtual} {...this.props}/> 
		        </div> 
		        <div className="pagination">
		          <Paginacao onClickPagina={this.mudarPagina} paginaAtual={this.state.paginaAtual} tipo="animes"/>
		        </div>
			</section>
		);
	}
}

export default Animes