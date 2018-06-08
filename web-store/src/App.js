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

				<div className="Wrapper">
					<div className="Main">
						<div className="Product">
							<Card />
						</div>
						<div className="Product">
							<Card />
						</div>
						<div className="Product">
							<Card />
						</div>
						<div className="Product">
							<Card />
						</div>
					</div>
					<div className="SlideRight">
						<Card />
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}

export default App;
