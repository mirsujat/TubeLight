import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Row, Col } from 'react-materialize';

import './App.css';

import Navigation from './components/NavBar/NavBar';
import Card from './components/Card/Card';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Row>
					<Navigation />
				</Row>
				<Row>
					<Col m={9}>
						<h5>Sports Shoes</h5>

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
						<h5>Trending Fashion</h5>
						<Slider className="Trend" />
						<Slider className="Trend" />
					</Col>
				</Row>

				<Row>
					<Footer />
				</Row>
			</div>
		);
	}
}

export default App;
