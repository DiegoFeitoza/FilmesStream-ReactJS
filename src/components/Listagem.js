import React, { Component } from 'react';
import axios from 'axios';

import {BrowserRouter as Router,
        Route,
        Link,
        NavLink} from 'react-router-dom';

import './Listagem.css';

import Poster from '../images/poster.jpg'


const MontaLista = (props) => {
  return(
  	<div>
	    <ul>
	      {props.data.map((movie,i) => <MontaLinha {...movie} urlBase={props.urlBase} key={i}/>)}
	    </ul>
	</div>	
  );
}

const MontaLinha = (props) => {
  return(
    <li>
	 	<Link to={`${props.urlBase}/detalhe/${props._id}`}>
	        <div>
	         	<div className="titulo-box">
	          		<span>{props.title}</span>
	          	</div>
	           <div className="detalhes-filme">
	           	<span className="ano">{props.year}</span>
	           	<span className="imbd">{props.imdb_id}</span>
	            <img src={props.images.poster} alt={props.title}/>
	          </div>
	        </div>     
    	</Link>
    </li>
  );
}

class Listar extends Component{
	state = {
      data: []
	  }

	render(){
		//Iniciando renderização de componentes
		if(this.props.tipo === "filmes"){
			axios.get('https://tv-v2.api-fetch.website/movies/'+this.props.pagina)
		      .then(result => {
		        this.setState({
		          data: result.data
		        })     
		      });
		}else if(this.props.tipo === "series"){
			axios.get('https://tv-v2.api-fetch.website/shows/'+this.props.pagina)
		    .then(result => {	    
		      this.setState({
		        data: result.data
		      })     
		    });
		}else if(this.props.tipo === "animes"){
			axios.get('https://tv-v2.api-fetch.website/animes/'+this.props.pagina)
		      .then(result => {
		        this.setState({
		          data: result.data
		        })    
		      });
		}
		return(
				<div>
					<MontaLista data={this.state.data} urlBase={this.props.match.url}/>
				</div> 
			);
	}
}

export default Listar;