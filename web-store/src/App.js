import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

import Card from './components/Card/Card';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<Row>
					<Col m={3}>
						{' '}
						<Card />
					</Col>
					<Col m={3}>
						{' '}
						<Card />
					</Col>
					<Col m={3}>
						{' '}
						<Card />
					</Col>
					<Col m={3}>
						{' '}
						<Card />
					</Col>
				</Row>
			</div>
		);
	}
}

export default App;
