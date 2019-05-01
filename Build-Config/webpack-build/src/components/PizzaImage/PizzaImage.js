import React from 'react';

import Style from './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpg';

const pizzaImage = () => (
	<div className={Style.PizzaImage}>
		<img src={PizzaImage} className={Style.Pizza} />
	</div>
);

export default pizzaImage;
