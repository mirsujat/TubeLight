import React, { Component } from 'react';
import { Card } from 'react-materialize';
import ImageSlider from './ImageSlide';

class ImageCard extends Component {
	render() {
		return (
			<Card
				header={<ImageSlider reveal waves="light" />}
				title="Card Title"
				reveal={
					<p>
						Here is some more information about this product that is only
						revealed once clicked on.
					</p>
				}>
				<p>
					<a href="">This is a link</a>
				</p>
			</Card>
		);
	}
}

export default ImageCard;
