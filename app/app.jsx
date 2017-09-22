import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Container } from 'Container';


//laod foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

require('style-loader!css-loader!sass-loader!applicationStyles');

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