import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import Navigation from './components/NavBar/NavBar';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

class App extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<div className="row">
					<div className="col s10">
						<div className="col s3">
							<Card />
						</div>

						<div className="col s3">
							<Card />
						</div>

						<div className="col s3">
							<Card />
						</div>
						<div className="col s3">
							<Card />
						</div>
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}

export default App;
