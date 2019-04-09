import React, { Component } from 'react';
import axios from 'axios';

import './Paginacao.css';

const MontaLista = (props) => {
  return(
    <ul className="pagination">
      {props.data.map((item,i) =>
      		<MontaNumber nome={item} key={i} clickPagina={props.click} pgAtual={props.paginaAtual}/>
      	)}
    </ul>
  );
};

const MontaNumber = (props) => {
	let value = props.nome;
	let classeAtiva = 'page-link';	
	value = value.split('/')[1];
	
	if(props.pgAtual === value){
		classeAtiva += ' active';
	}

	return(
		<li className="page-item"><a href="javascript:;" className={classeAtiva} onClick={() => {props.clickPagina(value)}}>{value}</a></li>
	);
}

class Paginacao extends Component{
	state={
		paginas: []
	}

	render(){
		if(this.props.tipo === 'filmes'){
			axios.get('https://tv-v2.api-fetch.website/movies')
		    .then(result => {
		      this.setState({
		        paginas: result.data
		      })     
		    });
		}else if(this.props.tipo === 'series'){			
		    axios.get('https://tv-v2.api-fetch.website/shows')
		    .then(result => {
		      this.setState({
		        paginas: result.data
		      })     
		    });
		}else if(this.props.tipo === 'animes'){			
		    axios.get('https://tv-v2.api-fetch.website/animes')
		    .then(result => {
		      this.setState({
		        paginas: result.data
		      })     
		    });
		}
		return(
			<MontaLista data={this.state.paginas} click={this.props.onClickPagina} paginaAtual={this.props.paginaAtual}/>
		);
	}
}

export default Paginacao;