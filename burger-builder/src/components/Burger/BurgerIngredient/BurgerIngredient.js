import React from 'react';

import Style from './burgerIngredient.css';

const burgerIngredient = props => {
	let ingredient = null;

	switch (props.type) {
		case 'bread-bottom':
			ingredient = <div className={Style.BreadBottom}>todo</div>;
			break;

		case 'bread-top':
			ingredient = (
				<div className={Style.BreadTop}>
					<div className={Style.Seeds1}>todo</div>
					<div className={Style.Seeds2}>todo</div>
				</div>
			);
			break;

		case 'meat':
			ingredient = <div className={Style.Meat}>todo</div>;
			break;

		case 'cheese':
			ingredient = <div className={Style.Cheese}>todo</div>;
			break;

		case 'bacon':
			ingredient = <div className={Style.Bacon}>todo</div>;
			break;

		case 'salad':
			ingredient = <div className={Style.Salad}>todo</div>;
			break;
		default:
			ingredient = null;
	}

	return ingredient;
};

export default burgerIngredient;
