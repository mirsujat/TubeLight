import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Row, Col } from 'react-materialize';

import './App.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import Navigation from './components/NavBar/NavBar';
import Card from './components/Card/Card';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';

class App extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<h4>This is Title</h4>
				<Row>
					<Col m={10} className="Wrapper">
						<Col m={3}>
							<Card />
						</Col>
						<Col m={3}>
							<Card />
						</Col>
						<Col m={3}>
							<Card />
						</Col>
						<Col m={3}>
							<Card />
						</Col>
						<Col m={3}>
							<Card />
						</Col>
						<Col m={3}>
							<Card />
						</Col>
						<Col m={3}>
							<Card />
						</Col>
						<Col m={3}>
							<Card />
						</Col>
					</Col>
					<Col m={2} className="ContentRight">
						<h5>Trending Fashion</h5>
						<Slider />
						<h6>Factory hot sales custom korean sports </h6>
						<Slider />
						<h6>Factory hot sales custom korean sports </h6>
						<Slider />
						<h6>Factory hot sales custom korean sports </h6>
					</Col>
				</Row>
				<h4>This is Title</h4>
				<Footer />
			</div>
		);
	}
}

export default App;
