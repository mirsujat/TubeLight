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

				<Row>
					<img
						className="Banner"
						src="./assets/images/Banner.png"
						alt="Banner"
					/>
					<h5 className="HeaderText">This is Title</h5>
					<Col m={10} className="Wrapper">
						<Card />
						<Card />
						<Card />
						<Card />

						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
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

				<Footer />
			</div>
		);
	}
}

export default App;
