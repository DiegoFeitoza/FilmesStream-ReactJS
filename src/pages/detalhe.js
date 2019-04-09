import React, { Component } from 'react';
import axios from 'axios';

import '../components/Listagem.css';
import Collapse from '../components/Collapse.js';
import './Detalhe.css';

import Poster from '../images/poster.jpg'


const calculaDuracao = (min,type) => {
	let timeTotal;
	if(min){
		timeTotal = Math.floor(min/60)+'h'+(min%60)+'m';
	}else{
		timeTotal = 'HH:mm'
	}

	if(type == "series" || type == "animes"){
		timeTotal += " por episodio";
	}

	return(timeTotal);
}

const carregaGeneros = (arrayGenero) => {
	let generos = '';

	if(arrayGenero){
		for (let i=0; i < arrayGenero.length; i++) {
			(i == 0) ? generos = arrayGenero[i] : generos += ' - ' + arrayGenero[i];
		}
	}

	return(generos);
}

const carregaEps = (eps) =>{
	let qtdEps;
	if(eps){
		qtdEps = eps.length;
	}
	return(qtdEps);
}

const CarregaDetalhe = (props) => {
	const trataDetalhe = () => {
		if(props.type == "filmes"){
			return(
				<div className="trailer-detalhe">		      		
				  <Collapse id="teste-id" textButton="Assista o trailer" type="url" url={props.data.trailer}/>
	      		</div>
			);
		}else if(props.type == "series"){
			let dataSerie = <div className="temporadas">
			    {props.data.num_seasons}
			    Temporadas
			    <br />
			    {carregaEps(props.data.episodes)} Episodios
			  </div>;
			return(
				<div className="trailer-detalhe">		      		
				  <Collapse id="teste-id" textButton="Mais detalhes" type="data" dataCollapse={dataSerie}/>
	      		</div>
			);
		}else if(props.type == "animes"){
			let dataAnime = <div className="temporadas">
			    {props.data.num_seasons} Temporadas
			    <br />
			    {carregaEps(props.data.episodes)} Episodios
			  </div>;
			return(
				<div className="trailer-detalhe">		      		
				  <Collapse id="teste-id" textButton="Mais detalhes" type="data" dataCollapse={dataAnime}/>
	      		</div>
			);
		}
	}
  return(
  	<section id="detalhe-filme">
  		<div className="container">
  			<div className="row">
		      	<div className="col-sm-3">
		       		<img src={props.data.images.poster} alt={props.data.title}/>  
		      	</div>
		       <div className="detalhes-filme col-sm-9">
		       	<div className="titulo-box">
		      		<span className="titulo-detalhe">{props.data.title}</span><span className="ano-detalhe">({props.data.year})</span>
		      	</div>
		      	<div className="duracao-imdb-detalhes">
		      		Duração: {calculaDuracao(props.data.runtime,props.type)} | {props.data.imdb_id} | {carregaGeneros(props.data.genres)}
		      	</div>
		      	<div className="descricao-detalhes">
					{props.data.synopsis}
		      	</div>
		      	{trataDetalhe()}   	     
		      </div>
		    </div>
	    </div>
    </section> 
  );
}

class Detalhe extends Component{
	state = {
      	data: {
      		images:{
      			poster: Poster
      		}
      	}
  	}

	render(){
		if(this.props.match.params.type == "filmes"){
			axios.get('https://tv-v2.api-fetch.website/movie/'+this.props.match.params.imdb)
		      .then(result => {
		        this.setState({
		          data: result.data
		        });		               
		      });			    
		}else if(this.props.match.params.type == "series"){
			 axios.get('https://tv-v2.api-fetch.website/show/'+this.props.match.params.imdb)
		      .then(result => {
		        this.setState({
		          data: result.data
		        })
		      });
		}else if(this.props.match.params.type == "animes"){
			 axios.get('https://tv-v2.api-fetch.website/anime/'+this.props.match.params.imdb)
		      .then(result => {
		        this.setState({
		          data: result.data
		        })
		      });
		}

		return(		
				<CarregaDetalhe data={this.state.data} type={this.props.match.params.type}/>				
			)
		
	}
}

export default Detalhe;