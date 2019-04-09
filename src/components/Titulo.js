import React, { Component } from 'react';
import './Titulo.css';


class Titulo extends Component{
	
	render(){
		return(
			<div>
				<h1 className="App-title">{this.props.titulo}</h1>
			</div>
		);
	}
}

export default Titulo;