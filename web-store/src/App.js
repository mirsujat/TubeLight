import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import Navigation from './components/NavBar/NavBar';
import Card from './components/Card/Card';
import SliderRight from './components/Slider/Slider';
import Footer from './components/Footer/Footer';

class App extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<div className="row">
					<div className="col s10">
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
					<div className="col s2 Trend">
						<h5>Trending Fashion</h5>
						<SliderRight />
						<h6>Factory hot sales custom korean sports</h6>
						<SliderRight />
						<h6>Baolite Women's Smart Casual skateboard</h6>
						<SliderRight />
						<h6>Breathable Beach Mountain Hiking Sport</h6>
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}

export default App;
