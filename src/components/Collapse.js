import React, { Component } from 'react';

import Titulo from './Titulo.js';
import './Collapse.css';
const CarregaCollapse = (props) => {
	let content;
	if(props.data.type == 'url'){
		let url = props.data.url;
		if(url){
			url = url.replace('watch?v=','embed/');
		}
		content = <div className="row">
				    <div className="col-sm-8">
					  <div id="div-iframe">
					    <iframe className="iframe-collapse" src={url}>
					    </iframe>
					  </div>
					</div>
				  </div>
	}else{
		content = <div className="card card-body">
						<div className="conteudo-collapse">
						{props.data.dataCollapse}
						</div>
					</div>
	}
  return(
  	<section id="component-collapse">
  		<button className="btn btn-primary" type="button" data-toggle="collapse" data-target={"#"+props.data.id} aria-expanded="false" aria-controls={props.data.id}>
	    	{props.data.textButton}
	    </button>
	    <div className="collapse" id={props.data.id}>		  
		   	{content}		 
		</div>
    </section> 
  );
}



class Collapse extends Component{
	render(){
		
		return(	
				<CarregaCollapse data={this.props} />				
			);		
	}
}

export default Collapse;