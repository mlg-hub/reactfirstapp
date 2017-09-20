import React, {component} from 'react';

import { Nav } from 'Nav';
import { Main } from 'Main';

export class Container extends React.Component {
	
	render() {
		return (
			<div>
				this is the Container Component!!
				<Nav/>
				<Main/>
			</div>
		);
	}
}