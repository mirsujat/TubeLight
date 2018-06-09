import React, { Component } from 'react';
import Slider from 'react-slick';

class MainSlider extends Component {
	render() {
		var settings = {
			dots: true,
			arrows: false,
			infinite: true,
			speed: 500,
			autoplay: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};

		return (
			<Slider {...settings}>
				<div>
					<img
						className="responsive-img"
						src="./assets/images/slides/slide-1.jpg"
						alt="Offer"
					/>
				</div>
				<div>
					<img
						className="responsive-img"
						src="./assets/images/slides/slide-2.jpg"
						alt="Offer"
					/>
				</div>
				<div>
					<img
						className="responsive-img"
						src="./assets/images/slides/slide-3.jpg"
						alt="Offer"
					/>
				</div>
			</Slider>
		);
	}
}

export default MainSlider;
