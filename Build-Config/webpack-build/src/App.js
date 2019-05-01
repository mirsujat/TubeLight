import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => {
	return import('./containers/Pizza');
});

class App extends Component {
	render() {
		return (
			<div>
				<div>
					<Link to="/">Users</Link> | <Link to="/pizza">Pizza</Link>
				</div>
				<div>
					<Route path="/" component={Users} />
					<Route path="/pizza" component={AsyncPizza} />
				</div>
			</div>
		);
	}
}

export default App;
