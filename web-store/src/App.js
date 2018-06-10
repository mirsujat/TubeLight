import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import Navigation from './components/NavBar/NavBar';
import Nav from './components/NavBar/Nav';
import MainSlider from './components/MainSlider/MainSlider';
import Card from './components/Card/Card';
import SliderRight from './components/Slider/Slider';
import ShopNow from './components/ShopNow/ShopNow';
import Footer from './components/Footer/Footer';

class App extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<div className="row col s12">
					<MainSlider />
				</div>
				<div className=" margin100 " />
				<div className="row">
					<h5 className="HeaderText">SPORTS SHOES</h5>
					<Nav />

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
				<div class="divider margin100 hide-on-small-only " />
				<div className="row">
					<h4 className="HeaderText2">SHOP BY SPORTS</h4>
					<div className="col s12 ">
						<div className="Bgimage">
							<ShopNow />
							<ShopNow />
							<ShopNow />
							<ShopNow />
							<ShopNow />
							<ShopNow />
						</div>
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}

export default App;
