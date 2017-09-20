import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {IndexRoute} from 'react-router';
import { Container } from 'Container';
import { Weather } from 'Weather';

class App extends React.Component{
	
	render() {
		return (
			<Router>
				<Route path={"/"} component={Container}>
				</Route>
			</Router>	
			// <div>
			// 	Okay!!!
			// 	<Main/>
			// </div>
		);
	}
}


ReactDOM.render(
			<App/>, document.getElementById('app')
		);