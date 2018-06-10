import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import Navigation from './components/NavBar/NavBar';
import MainSlider from './components/MainSlider/MainSlider';
import Card from './components/Card/Card';
import SliderRight from './components/Slider/Slider';
import Footer from './components/Footer/Footer';

class App extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<div className="row col s12 margin100">
					<MainSlider />
				</div>

				<div className="row">
					<h5 className="HeaderText">SPORTS SHOES</h5>
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
						<h6>Baolite Women's Smart Casual skateboard</h6>
					</div>
				</div>
				<div class="divider margin100 " />
				<div className="row">
					<div className="col s12 margin100 ">
						<img
							className="responsive-img"
							src="/assets/images/Footwear_Boys.jpg"
							alt="background images"
						/>
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}

export default App;
