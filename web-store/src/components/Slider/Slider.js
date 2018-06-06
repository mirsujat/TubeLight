import React from 'react';
import Slider from 'react-slick';

class SimpleSlider extends React.Component {
	render() {
		var settings = {
			dots: false,
			infinite: true,
			speed: 500,
			autoplay: true,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<Slider {...settings} className="Trend">
				<div>
					<img
						src="./assets/images/slides/Cheap-lightweight-running-yellow-high-cut-basketball.png_220x220.png"
						alt="Shoe"
					/>
				</div>
				<div>
					<img
						src="./assets/images/slides/Men-shoes-sport-athletic-trainers-running-custom.jpg_220x220.jpg"
						alt="Shoe"
					/>
				</div>
				<div>
					<img
						src="./assets/images/slides/2017Comfortable-retro-basketball-shoes-running-shoes-sneaker.jpg_220x220.jpg"
						alt="Shoe"
					/>
				</div>
				<div>
					<img
						src="./assets/images/slides/115BH-2017-Good-quality-fashion-breathable-running.jpg_220x220.jpg"
						alt="Shoe"
					/>
				</div>
				<div>
					<img
						src="./assets/images/slides/Durable-men-professional-basketball-shoes-cheap-basketball.jpg_220x220.jpg"
						alt="Shoe"
					/>
				</div>
			</Slider>
		);
	}
}

export default SimpleSlider;
