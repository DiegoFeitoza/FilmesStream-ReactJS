import React, { Component } from 'react';

import Titulo from '../components/Titulo.js';
import Listar from '../components/Listagem.js';
import Paginacao from '../components/Paginacao.js';

class Home extends Component{

	render(){
		return(
			<section className="home">
		          <Titulo titulo={'Bem vindo'}/>
			</section>
		);
	}
}

export default Home;