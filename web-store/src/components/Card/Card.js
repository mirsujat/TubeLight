import React, { Component } from 'react';

import ImageSlider from './ImageSlide';

class Card extends Component {
	render() {
		return (
			<div className="col s3">
				<div className="card sticky-action">
					<div className="card-image waves-effect waves-block waves-light">
						<ImageSlider className="activator" />
					</div>
					<div className="card-content">
						<span className="card-title activator grey-text text-darken-4">
							<a href="">
								fashion men lightweight action sports running shoes knitting
								running shoes{' '}
							</a>
							<i className="material-icons right">more_vert</i>
						</span>
						<h5 className="Price">
							US $ 8.50 <span className="Text-Normal">/ Pairs</span>{' '}
						</h5>
						<h5 className="Price">
							One Pairs <span className="Text-Normal">(Min. Order)</span>
						</h5>
						<p>
							<a href="">Company: NiKi</a>
						</p>
					</div>

					<div className="card-action">
						<a className="waves-effect waves-light btn teal lighten-2">
							SHOP NOW
						</a>
						<span className="right">
							<i className="small material-icons">add_shopping_cart</i>
						</span>
					</div>

					<div className="card-reveal">
						<span className="card-title grey-text text-darken-4">
							Card Title<i className="material-icons right">close</i>
						</span>
						<p>
							Here is some more information about this product that is only
							revealed once clicked on.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
