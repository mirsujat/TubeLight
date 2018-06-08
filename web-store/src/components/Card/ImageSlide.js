import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default () => {
	let settings = {
		showArrows: true,
		showIndicators: false,
		showThumbs: false
	};

	return (
		<Carousel {...settings}>
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
		</Carousel>
	);
};
