import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Row, Col } from 'react-materialize';

import Navigation from './components/NavBar/NavBar';
import Card from './components/Card/Card';
import Slider from './components/Slider/Slider';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />
				<header className="App-header">
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<Row>
					<Col m={9}>
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
					</Col>
					<Col m={3}>
						<Slider />
					</Col>
				</Row>
				<Row>
					<Col m={9}>
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
					</Col>
					<Col m={3}>
						<Slider />
					</Col>
				</Row>
			</div>
		);
	}
}

export default App;
