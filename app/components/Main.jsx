import React from 'react';
import { Route } from 'react-router-dom';
import { Weather } from 'Weather';

export class Main extends React.Component{
	
	render() {
		return (
			<div>
				this is the main Component!!
				<Route path="/" component={Weather}/>
				</div>
		);
	}
}